require "kemal"

#Kemal.config.port=80

get "/" do
  "Hello World!"
end

Kemal.run