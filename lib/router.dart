import 'package:amazon_clone_tutorial/features/auth/screens/auth.screens.dart';
import 'package:flutter/material.dart';

Route<dynamic> generateRoute(RouteSettings routeSettings) {
  switch (routeSettings.name) {
    case AuthScreen.routeName:
      return MaterialPageRoute(
        settings: routeSettings,
        builder: (_) => const AuthScreen(),
      );
    //Provjeri material page route
    default:
      return MaterialPageRoute(
          builder: (_) => const Scaffold(
                body: Center(
                  child: Text('404 error'),
                ),
              ));
  } // moramo routeSettings matchati sa bilo kojim imenom koje imamo i koristimo
}
