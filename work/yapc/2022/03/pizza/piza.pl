package Acme::Pizza {
  use strict;
  use warnings;
  use feature 'signatures';
  no warnings "experimental::signatures";


  sub get($class) {
    sleep 60;
  }
}

Acme::Pizza->get();
