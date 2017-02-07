[![](https://scdn.rapidapi.com/RapidAPI_banner.png)](https://rapidapi.com/package/LinkedIn/functions?utm_source=RapidAPIGitHub_LinkedInFunctions&utm_medium=button&utm_content=RapidAPI_GitHub)


# LinkedIn Package
Bring the power of the world's largest professional network to your apps
* Domain: linkedin.com
* Credentials: accessToken

## How to get credentials: 
LinkedIn relies on the industry standard OAuth 2.0 protocol for granting access.
Read more about Linkedin Authenticating with OAuth 2.0: [https://developer.linkedin.com/docs/oauth2](https://developer.linkedin.com/docs/oauth2)

## LinkedIn.getAccessToken
Exchange Authorization Code for an Access Token.

| Field       | Type  | Description
|-------------|-------|----------
| code        | String| Required: The authorization code.
| redirectUri | String| Required: Application redirect url.
| clientId    | String| Required: Application API Key.
| clientSecret| String| Required: The `Secret Key` value generated in prevoius OAuth step. Follow the Best Practices guide (https://developer.linkedin.com/docs/best-practices#keysecret) for handing your clientSecret value.

## LinkedIn.getProfileData
Once you have obtained a valid access token for the user, you can use the following REST API call to retrieve basic profile data for the user.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: LinkedIn accessToken.
| fields         | String     | There are additional company profile fields available that are not returned as part of the default call.
| profileLanguage| String     | LinkedIn members have the opportunity to provide their profile information in multiple languages. To specify the language you would prefer to have returned, you include an `profileLanguage` to request. The value of the `profileLanguage` should be a comma separated list of Language Codes (https://developer.linkedin.com/docs/reference/language-codes), ordered from highest to lowest priority of preference. Example: `es-ES, en-US`

## LinkedIn.createSharedContent
Use Share on LinkedIn to: Grow your user base and drive traffic to your website, 
Get your content in front of a potential audience of millions of professionals, 
Benefit from viral distribution as people share your content with their professional networks

| Field                   | Type       | Description
|-------------------------|------------|----------
| accessToken             | credentials| Required: LinkedIn accessToken.
| comment                 | String     | Required: A comment by the member to associated with the share. If none of the above content parameters are provided, the comment must contain a URL to the content you want to share.  If the comment contains multiple URLs, only the first one will be analyzed for content to share.
| visibilityCode          | String     | Required: One of the following values: `anyone`:  Share will be visible to all members. `connections-only`:  Share will only be visible to connections of the member performing the share.
| contentTitle            | String     | Required: The title of the content being shared.
| contentDescription      | String     | Optional if you post with url: The description of the content being shared.
| contentSubmittedUrl     | String     | Optional if you post with url: The description of the content being shared.
| contentSubmittedImageUrl| String     | Optional if you post with url: A fully qualified URL to a thumbnail image to accompany the shared content. The image should be at least 80 x 150px for best results.

## LinkedIn.checkCompanySharing
This call returns a simple boolean value that indicates whether the company specified by the `companyId` value in the request has sharing enabled or disabled.  Sharing is enabled (i.e. true) by default.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: LinkedIn accessToken.
| companyId  | String     | Required: Valid Company id.

## LinkedIn.checkMemberIsCompanyAdministrator
The API calls listed on this page require the member to be an administrator of the target company.  This call returns a simple boolean value that indicates whether the currently authenticated user is configured to be an administrator of the company specified by the `companyId` value in the request.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: LinkedIn accessToken.
| companyId  | String     | Required: Valid Company id.

## LinkedIn.getCompaniesWhereUserAdministrator
The API calls listed on this page require the member to be an administrator of the target company. This call returns a list of all of the companies that the authenticated user is currently configured to be an administrator of.  If the user is an administrator of more than 10 companies, you will need to use the optional start and count parameters to page through the complete result set.  The total number of companies that the member is an administrator of is returned in the body of the request.  You can use this value to determine whether you need to make additional paged requests to retrieve the complete list of companies for the user.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: LinkedIn accessToken.
| start      | String     | The offset value for paginating update results by.
| count      | String     | Maximum number of updates to return.

## LinkedIn.getCompanyProfile
This call will return profile information about the company specified by the `companyId` value in the request.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: LinkedIn accessToken.
| companyId  | String     | Required: Valid Company id.
| fields     | String     | There are additional company profile fields available that are not returned as part of the default call.  The following example illustrates how you modify your request to ask for additional profile fields beyond the default values.

## LinkedIn.getCompanyUpdates
This call returns a list of update events from the from the LinkedIn company page of the company identified by the `companyId` value in the request.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: LinkedIn accessToken.
| companyId  | String     | Required: Valid Company id.
| eventType  | String     | Valid values are: `job-posting`, `new-product`, `status-update`.
| start      | String     | The offset value for paginating update results by.
| count      | String     | Maximum number of updates to return.

## LinkedIn.getSingleCompanyUpdate
This call will return a single specific company update record for the company identified by the `companyId` value and the update identified by the `updateKey` value in the request.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: LinkedIn accessToken.
| companyId  | String     | Required: Valid Company id.
| updateKey  | String     | Required: The update identified.

## LinkedIn.getSingleCompanyUpdateComments
This call will return all of the comments for the company update identified by `updateKey` for the company identified by the `companyId` value in the request.  A maximum of 100 comments will be returned.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: LinkedIn accessToken.
| companyId  | String     | Required: Valid Company id.
| updateKey  | String     | Required: The update identified.

## LinkedIn.getSingleCompanyUpdateLikes
This call will return all of the likes for the company update identified by `updateKey` for the company identified by the `companyId` value in the request.  By default, the most recent 100 likes will be returned.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: LinkedIn accessToken.
| companyId  | String     | Required: Valid Company id.
| updateKey  | String     | Required: The update identified.

## LinkedIn.createCompanyShare
Create a company share

| Field                   | Type       | Description
|-------------------------|------------|----------
| accessToken             | credentials| Required: LinkedIn accessToken.
| companyId               | String     | Required: Valid Company id.
| comment                 | String     | A comment by the member to associated with the share. If none of the above content parameters are provided, the comment must contain a URL to the content you want to share.  If the comment contains multiple URLs, only the first one will be analyzed for content to share.
| visibilityCode          | String     | One of the following values: `anyone`:  Share will be visible to all members. `connections-only`: Share will only be visible to connections of the member performing the share. This field is required in all sharing calls.
| contentTitle            | String     | The title of the content being shared.
| contentDescription      | String     | The description of the content being shared.
| contentSubmittedUrl     | String     | A fully qualified URL for the content being shared.
| contentSubmittedImageUrl| String     | A fully qualified URL to a thumbnail image to accompany the shared content. The image should be at least 80 x 150px for best results. 2MB max filesize.
| shareTargets            | String     | A collection of targeting codes and values used to ensure that the shared content reaches a specific audience.

## LinkedIn.getCompanyFollowers
If you choose to target content that you share on behalf of a company, there is a minumum number of followers that must make up the segment you are targeting before you will be able to successfully share the targeted content.  This request allows you to get a follower-count for a specific segment to ensure you are at or over the minimum requirement for the target segment for the company specified by the `companyId` value in the request.

| Field       | Type       | Description
|-------------|------------|----------
| accessToken | credentials| Required: LinkedIn accessToken.
| companyId   | String     | Required: Valid Company id.
| geo         | String     | Segment by a particular geographic area.
| companySizes| String     | Segment by a particular company size targeting code.
| jobFunc     | String     | Segment by member job function targeting code.
| industries  | String     | Segment by member industry.
| seniorities | String     | Segment by member seniority level targeting code.

## LinkedIn.addCommentOnCompanyBehalf
This call will allow you to submit a comment on a company update on behalf of a company, rather than a member.  The comment is submitted for the update identified by `updateKey` under the company identified by `companyId` in the request.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: LinkedIn accessToken.
| companyId  | String     | Required: Valid Company id.
| updateKey  | String     | Required: The update identified.
| comment    | String     | Required: A comment by the company to associated with the share. If none of the above content parameters are provided, the comment must contain a URL to the content you want to share.  If the comment contains multiple URLs, only the first one will be analyzed for content to share.

## LinkedIn.getCompanyHistoricalFollowerStatistics
This call retrieves statistics about followers for a particular company page identified by the `companyId` value in the request.  The request returns a follower count for both paid and organic followers within all of the days or months in the selected date range, based on the requested granularity. 

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: LinkedIn accessToken.
| companyId      | String     | Required: Valid Company id.
| timeGranularity| String     | Required: Granularity of statistics. Supported values are: `day`, `month`
| startTimestamp | String     | Required: Starting timestamp of when the stats search should begin (milliseconds since epoch).
| endTimestamp   | String     | Ending timestamp of when the stats search should end (milliseconds since epoch). The current time will be used if parameter not set.

## LinkedIn.getCompanyHistoricalStatusUpdateStatistics
The Historical Status Update Statistics API provides impression and engagement data on company shares for a given company page.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| Required: LinkedIn accessToken.
| companyId      | String     | Required: Valid Company id.
| timeGranularity| String     | Required: Granularity of statistics. Supported values are: `day`, `month`
| startTimestamp | String     | Required: Starting timestamp of when the stats search should begin (milliseconds since epoch).
| endTimestamp   | String     | Ending timestamp of when the stats search should end (milliseconds since epoch). The current time will be used if parameter not set.
| updateKey      | String     | Optionally provide an update key value to return statistics for a specific company update.

## LinkedIn.getCompanyPageStatistics
The Historical Status Update Statistics API provides impression and engagement data on company shares for a given company page. The API provides much better flexibility and granularity levels on company share stats compared to the existing Company Statistics API. The API can support statistics at both the aggregate and individual status update level. In addition, statistics retrieved by this API are up-to-date in real time.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| Required: LinkedIn accessToken.
| companyId  | String     | Required: Valid Company id.

