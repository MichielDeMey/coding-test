<?php

namespace Teamleader\CodingTest;

use Psr\Log\AbstractLogger;

class Logger extends AbstractLogger
{
    public function log($level, $message, array $context = [])
    {
        // Log to stdout and use Docker log drivers
        file_put_contents('php://stdout', $message.PHP_EOL, FILE_APPEND | LOCK_EX);
    }
}
