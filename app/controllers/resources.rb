get '/' do
  limit = Resource.count -1
  # resource = Resource.find(rand(limit)+1)
  resource = Resource.find(1)
  tags = resource.tags
  categories = resource.categories
  user = resource.user
  children = resource.children
  response = {
    resource: resource,
    tags: tags,
    categories: categories,
    user: user,
    children: children
  }

  return response.to_json
end

get '/home' do
 erb :"/index"
end

get '/search' do
  erb :"/search"
end
post '/query' do
  tags = params[:tags]
  p '*'*100
  p params
  p '*'*100
  #tags = ["ex","cumque"]
  tags_inside_db = []
  tags.each do |tag|
    tags_inside_db.push( Tag.find_by(name: tag) ) if (Tag.find_by(name: tag))
  end
  search_results = []
  tags_inside_db.each do |tag|
    search_results.push << tag.resources
    #p [tag,tag.resources]
  end
  return {
      array_of_resources: search_results
    }.to_json
end
