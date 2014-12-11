Website::Application.configure do

  config.cache_classes = true
  config.eager_load = true
  config.consider_all_requests_local  = false
  config.action_controller.perform_caching = true
  config.serve_static_assets = true
  config.assets.js_compressor = :uglifier
  config.assets.compile = true
  config.assets.digest = true
  config.assets.version = '1.0'
  config.assets.precompile += ['jquery.js', 'jquery_ujs.js']
  config.log_level = :info
  config.active_support.deprecation = :notify
  config.log_formatter = ::Logger::Formatter.new
  config.action_mailer.default_url_options = { :host => 'http://hfc-meetings.herokuapp.com/' }
end