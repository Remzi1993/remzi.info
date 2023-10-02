import * as bootstrap from 'bootstrap'

/**
 * Bootstrap plugin for Vue 3.
 *
 * You get the following Vue warning:
 * [Vue warn]: A plugin must either be a function or an object with an "install" function.
 *
 * This warning is generated because Vue expects a plugin to have an install function.
 * The best solution would be for the Bootstrap library maintainers to provide a Vue-compatible plugin format, but until
 * that happens, you can make the warning go away by adding an empty install function to the plugin object.
 *
 * This simple mockup plugin is enough to make the warning go away.
 * @author Remzi Cavdar - remzi.cavdar@hva.nl - Student at the Amsterdam University of Applied Sciences
 */

export default {
    // @ts-ignore
    install(app) {
        app.config.globalProperties.$bootstrap = bootstrap
    },
    exports: bootstrap
}