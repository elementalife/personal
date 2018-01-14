var newsFlag = window.localStorage.getItem('newsFlag')

// Runs if extension installation is done.
// if (!newsFlag) {
//   var optionsPageURL = chrome.extension.getURL('/views/options.html')
//   chrome.tabs.create({url: optionsPageURL})
//   window.localStorage.setItem('newsFlag', '1')
// }

// chrome.cookies.onChanged.addListener(function (info) {
//   console.log('onChanged' + JSON.stringify(info))
// })

function focusOrCreateTab (url) {
  chrome.windows.getAll({'populate': true}, function (windows) {
    var existing_tab = null
    for (var i in windows) {
      var tabs = windows[i].tabs
      for (var j in tabs) {
        var tab = tabs[j]
        if (tab.url == url) {
          existing_tab = tab
          break
        }
      }
    }
    if (existing_tab) {
      chrome.tabs.update(existing_tab.id, {'selected': true})
    } else {
      chrome.tabs.create({'url': url, 'selected': true})
    }
  })
}

chrome.browserAction.onClicked.addListener(function (tab) {
  // chrome.windows.create({'url': 'views/index.html', 'type': 'popup'}, function (window) {
  //   console.log('sucess')
  // })

  var url = chrome.extension.getURL('views/index.html')
  focusOrCreateTab(url)
})
