# emailer

Emailer microservice

## Configuring Gmail Transporter

1. Go to Google Cloud Platform
2. Create New Project
3. Under APIs & Services:
    1. External User Type
    2. Add self as user
        - This is the same login as `MAIL_USERNAME` and `MAIL_PASSWORD` found in `.env`
    3. Create credentials -> OAuth client ID
        1. Application Type: Web application
        2. Add https://developers.google.com/oauthplayground as an    "Authorized redirect URI"
          - It will be used to get the OAuth refresh token
        3. Put created client id and client secret under `OAUTH_CLIENTID` and `OAUTH_CLIENT_SECRET` in `.env`.
    4. Go to https://developers.google.com/oauthplayground
        1. Update configuration to use own OAuth2 credentials
        2. Find Gmail APIv1, select https://mail.google.com and click   "Authorize APIs"
        3. Put the refresh token under `OAUTH_REFRESH_TOKEN` in `.env`

### Additional Resources

- https://nodemailer.com/usage/using-gmail/
- https://www.freecodecamp.org/news/use-nodemailer-to-send-emails-from-your-node-js-server/