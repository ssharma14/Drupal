<?php
 
namespace Drupal\books\Controller;

use Drupal\Core\Controller\ControllerBase;


class BookListing extends ControllerBase {
 
  /**
   *   Method to render content/data to page
   */
  public function view() {
    return [
        '#markup' => $this->t('My custom page'),
    ];
  }
 
}