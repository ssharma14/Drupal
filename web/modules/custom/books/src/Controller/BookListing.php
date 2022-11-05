<?php
 
namespace Drupal\books\Controller;

use Drupal\Core\Controller\ControllerBase;


class BookListing extends ControllerBase {

  public function view() {
      return[
          '#theme' => 'book-listing',
          '#attached' => [
            'library' => [
                'books/general',
            ],
          ],
      ];
  }
}