package lib

/**
 * Created by Ultimate on 7/04/14.
 */
class ConfigFactory {

    public static ConfigObject getConfiguration() {

        File configFile = new File('config/config.groovy')
        File myConfigFile = new File('config/myConfig.groovy')

        ConfigObject config = new ConfigSlurper().parse(configFile.toURL())

        // Override "common" settings which resides in config.groovy with any "local" settings defined in myConfig.groovy
        if(myConfigFile.exists()) {
            ConfigObject myConfig = new ConfigSlurper().parse(myConfigFile.toURL())
            config = config.merge(myConfig)
        }

        return config

    }

}
