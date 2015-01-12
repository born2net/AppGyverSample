# Read more about app structure at http://docs.appgyver.com

module.exports =

  rootView:
    location: "http://localhost/index.html"

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
    {
      title: "Index"
      id: "index"
      location: "http://localhost/index.html"
    }
    {
      title: "Internet"
      id: "internet"
      location: "http://google.com" # URLs are supported!
    }
    {
      title: "Settings"
      id: "settings"
      location: "http://localhost/page4.html"
    }
  ]

  drawers:
      left:
        id: "leftDrawer"
        location: "views#drawer"
        showOnAppLoad: false
      options:
        animation: "swingingDoor"