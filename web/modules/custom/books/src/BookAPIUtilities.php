<?php

namespace Drupal\books;

use Drupal\Core\Cache\CacheBackendInterface;
use Drupal\Core\Entity\EntityTypeManager;
use Drupal\Core\Http\ClientFactory;
use Drupal\Core\Messenger\Messenger;
use Drupal\Core\Session\AccountProxy;
use Drupal\file\FileRepositoryInterface;
use Drupal\user\UserStorageInterface;
use GuzzleHttp\Exception\RequestException;

class BookAPIUtilities {

    private $client;
    private $messenger;
    private $cache;
    private $entityTypeManager;
    private $fileRepository;
    private $userEntity;

    public function __construct(ClientFactory $client, Messenger $messenger, CacheBackendInterface $cache,
    EntityTypeManager $entityTypeManager, FileRepositoryInterface $fileRepository, AccountProxy $currentUser){
        $this->client = $client->fromOptions([
            'base_uri' => 'https://www.googleapis.com',
        ]);
        $this->messenger = $messenger;
        $this->cache = $cache;
        $this->entityTypeManager = $entityTypeManager;
        $this->fileRepository = $fileRepository;
        $this->userEntity = $this->entityTypeManager->getStorage('user')->load($currentUser->id());
    }
}
