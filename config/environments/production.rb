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

  config.action_mailer.smtp_settings = {
    # from heroku mandrill instruction page
    #:port =>           '587',
    #:address =>        'smtp.mandrillapp.com',
    #:user_name =>      ENV['MANDRILL_USERNAME'],
    #:password =>       ENV['MANDRILL_APIKEY'],
    #:domain =>         'heroku.com',
    #:authentication => :plain
  }
  config.action_mailer.delivery_method = :smtp
end