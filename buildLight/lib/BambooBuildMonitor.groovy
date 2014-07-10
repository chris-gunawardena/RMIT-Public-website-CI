package lib

import javax.sound.sampled.AudioSystem
import javax.sound.sampled.Clip

class BambooBuildMonitor {

    private BambooRssParser bambooRssParser

    private String successSoundFile
    private String failureSoundFile

    BambooBuildMonitor(ConfigObject config) {
        bambooRssParser = new BambooRssParser(config.bamboo.rssUrl, config.bamboo.username, config.bamboo.password)
        this.successSoundFile = config.sounds.success
        this.failureSoundFile = config.sounds.failure
    }

    public BuildStatus getStatusOfPlans(List<String> plans) {
        for (String plan in plans) {
            if (!this.isPlanSuccessful(plan)) {
                return BuildStatus.FAILURE
            }
        }
        return BuildStatus.SUCCESS
    }

    private boolean isPlanSuccessful(String plan) {
        return bambooRssParser.wasLastRunSuccessful(plan)
    }

    public void playBuildFailureSound() {
        playSound(new File(failureSoundFile))
    }

    public void playBuildSuccessSound() {
        playSound(new File(successSoundFile))
    }

    private void playSound(File soundFile) {
        Clip clip = AudioSystem.clip;
        clip.open(AudioSystem.getAudioInputStream(soundFile));
        clip.start()
    }
}


