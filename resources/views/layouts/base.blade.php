<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>{{ env('APP_NAME') }} | @yield('title')</title>

  <meta name="description" content="@yield('description', env('APP_DESCRIPTION'))">
  <meta name="keywords" content="@yield('keywords', env('APP_KEYWORDS'))">

  <script src="{{ asset('js/browser-detect.js') }}"></script>  

  @yield('pre-styles')
  @section('styles')
    <link rel="stylesheet" href="{{ asset('css/vendor.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/main.css') }}?v1">
  @show

  <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('img/icons/apple-touch-icon.png') }}">
  <link rel="shortcut icon" type="image/png" sizes="32x32" href="{{ asset('img/icons/favicon-32x32.png') }}"> 
  <link rel="shortcut icon" type="image/png" sizes="16x16" href="{{ asset('img/icons/favicon-16x16.png') }}"> 
  <link rel='shortcut icon' type='image/x-icon' href="{{ asset('img/icons/favicon.ico') }}" /> 
  
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1">
</head>
<body id="top"> 
  @yield('pre-header')
  @section('header')
    @include('layouts.header')
  @show

  <main role="main" class="main-content">
    @section('content')
      <p>CONTENIDO</p>
    @show

  </main>

  @section('footer')  
    @include('layouts.footer')
  @show
  @yield('post-footer')

  @yield('pre-scripts')
  @section('scripts')
    <script src="{{ asset('js/vendor.min.js') }}"></script>
    <script src="{{ asset('js/main.js') }}?v2"></script>
  @show
  @yield('post-scripts')
  

  {{--  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-xxxxxxxx-xx"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments)};
    gtag('js', new Date());
    gtag('config', 'UA-xxxxxxxx-xx');
  </script>  --}}
</body>
</html>