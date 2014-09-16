Website::Application.routes.draw do
  devise_for :users
  root "pages#home"
	
	#links for each meeting room
	get "room1" => "pages#room1"
	get "room2" => "pages#room2"	

end
