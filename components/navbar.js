import Link from 'next/link'
function NavBar() {
  return (
  <>
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><Link href="../page1"><a>Page 1</a></Link></li>
      <li><a href="Page2">Page 2</a></li>
      <li><a href="Page3">Page 3</a></li>
    </ul>
  </div>
</nav>
  </>
  )
}

export default NavBar