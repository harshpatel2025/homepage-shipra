jQuery(() => {
  jQuery.each(wpml_cookies, (cookieName, cookieData) => {
    document.cookie =
      cookieName + "=" + cookieData.value + ";expires=" + cookieData.expires + "; path=" + cookieData.path
  })
})
