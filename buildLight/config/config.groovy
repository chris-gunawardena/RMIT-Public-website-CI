package config

bamboo {
    rssUrl = "http://localhost:8085/rss/createAllBuildsRssFeed.action?feedType=rssAll&os_authType=basic"
    username = "rss_reader"
    password = "password123"
    monitoredPlans = ["AE-BLD" , "AE-FST"]
}

sounds {
    failure = "failure.wav"
    success = "success.wav"
}



