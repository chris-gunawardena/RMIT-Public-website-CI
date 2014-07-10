package lib

class BambooRssParser {

    private String rssUrl
    private String username
    private String password

    BambooRssParser(String rssUrl, String username, String password) {
        this.rssUrl = rssUrl
        this.username = username
        this.password = password
    }


    public boolean wasLastRunSuccessful(String plan) {
        String rssPlanUrl = "${this.rssUrl}&buildKey=${plan}"
        String rssContent = downloadUrlWithBasicAuthentication(rssPlanUrl.toURL(), this.username, this.password)
        String title = this.getLastCompletedRunTitle(rssContent)
        if(!title) {
            throw new RuntimeException("Failed to find a completed run for plan ${plan}")
        }
        return title.contains("SUCCESSFUL") ? true : false
    }

    private String getLastCompletedRunTitle(String rssContent) {
        return new XmlSlurper().parseText(rssContent).channel[0].item[0].title
    }

    private String downloadUrlWithBasicAuthentication(URL url, String username, String password) {
        String authString = "${username}:${password}".getBytes().encodeBase64().toString()
        URLConnection connection = url.openConnection()
        connection.setRequestProperty( "Authorization", "Basic ${authString}" )
        return connection.content.text;
    }

}
