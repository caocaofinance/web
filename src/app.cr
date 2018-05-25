require "kemal"

#Kemal.config.port=80

get "/" do
  title="曹操"
  render "src/views/index.ecr"
end

Kemal.run