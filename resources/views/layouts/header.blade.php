

<header class="navbar navbar-default navbar-fixed-top" id="navnav" role="banner">
  <div class="container">
    <div class="navbar-header">
      <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="{{ route('inicio') }}">
        <img src="{{ asset('img/logos/logo.png') }}"/>
      </a>
    </div>
    <nav class="collapse navbar-collapse" id="navbar" role="navigation" >
      <ul class="nav navbar-nav navbar-right" role="tablist">
        <li class="active"><a href="#uno">Enlace</a></li>
        <li><a href="#dos">Enlace</a></li>
        <li><a href="#tres">Enlace</a></li>
        <li><a href="#cuatro">Enlace</a></li>
      </ul>
    </nav>
  </div>
</header>