<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>



<meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>{{ config('app.name', 'Laravel') }}</title>
  <!-- Fonts -->
  <link rel="dns-prefetch" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">
  <!-- Styles -->
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">
       
    </head>
    <body>
    <!-- id="app"  take from  el: '#app', in app.js -->
    <div id="app">

        <index></index>  
     </div>


       <!-- Scripts -->
  <script src="{{ asset('js/app.js') }}" defer></script>   
    </body>
</html>


<!-- when we changed something in Vue 
must in command line 
npm run watch 
to compile all things and changes -->