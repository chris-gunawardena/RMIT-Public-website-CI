import lib.*

import static lib.BuildStatus.SUCCESS

ConfigObject config = ConfigFactory.getConfiguration()

LightController lightController = new LightController()

BambooBuildMonitor bambooBuildMonitor = new BambooBuildMonitor(config)

BuildStatus lastBuildStatus = SUCCESS
lightController.green();

boolean consecutiveException = false;

while(true) { // run forever till an exception is consecutive

	try {
		while (true) { // run forever till there is an exception

			BuildStatus currentBuildStatus = bambooBuildMonitor.getStatusOfPlans(config.bamboo.monitoredPlans)

			if (currentBuildStatus != lastBuildStatus) {
				lastBuildStatus = currentBuildStatus
				if (currentBuildStatus == SUCCESS) {
					lightController.green();
				} else {
					lightController.red();
				}
			}
			
			consecutiveException = false
			sleep 10000

		}
	} catch (e) {
	
		e.printStackTrace()
		
		if(consecutiveException){
			//Oops, an unexpected error, let's just turn off the light so that someone notices
			lightController.off()
			System.exit(-1)
		}
		
		consecutiveException = true
		sleep 60000
		
	}

}


