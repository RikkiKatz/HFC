require File.expand_path('../boot', __FILE__)

require 'rails/all'
Bundler.require(:default, Rails.env)

module Website
    class Application < Rails::Application

    config.assets.initialize_on_precompile = false
    config.action_controller.include_all_helpers = false
    config.serve_static_assets = true

  end
end
