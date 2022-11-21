curl --request POST \
  --url 'https://api.twitter.com/oauth/request_token?oauth_callback=$HTTP_ENCODED_CALLBACK_URL' \
  --header 'Authorization: OAuth oauth_consumer_key="$oauth_consumer_key", oauth_nonce="$oauth_nonce", oauth_signature="oauth_signature", oauth_signature_method="HMAC-SHA1", oauth_timestamp="$timestamp", oauth_version="1.0"'
