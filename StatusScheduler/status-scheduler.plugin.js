/**
 * @name StatusScheduler
 * @author b3nb0t5000
 * @description BetterDiscord plugin to schedule / time Discord statuses (online, idle, DND, etc.)
 * @version 0.0.1
 * @authorId 438423191946526720
 * @authorLink https://twitter.com/pr1ncess_emily
 * @source https://github.com/b3nb0t5000/BetterDiscord-Plugins/blob/main/StatusScheduler/status-scheduler.plugin.js
 */

module.exports = class StatusScheduler {

    // Meta (i know i already added a meta but i'm gonna add another one cause i'm just like that)
    getName() {
        return "StatusScheduler";
    }
    getDescription() {
        return "BetterDiscord plugin to schedule / time Discord statuses (online, idle, DND, etc.)";
    }
    getVersion() {
        return "0.0.1";
    }
    getAuthor() {
        return "b3nb0t5000";
    }

    // Settings panel
    getSettingsPanel() {
        return "This is my BetterDiscord Status Scheduler plugin that I have no idea how I'm gonna code!";
    }

    // plugin start
    start() {
        //add getting zeres library / throwing error if it's not there?
    }

    // plugin stop
    stop() {} // Required function. Called when the plugin is deactivated

}

//testing commit from brackets
