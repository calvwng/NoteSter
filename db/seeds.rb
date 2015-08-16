require "faker"

#jhon = User.create(username:"Jhon Appleseed")

 # 1000.times do
 #    jhon.resources << Resource.create(title: Faker::Name.title, description: Faker::Lorem.paragraph(2, true))
 # end

#andrew = User.create(username:"Drew")

 # 1000.times do
 #    andrew.resources << Resource.create(title: Faker::Name.title, description: Faker::Lorem.paragraph(2, true))
 # end
 andrew = User.last
 jhon = User.first
 jhon_children = jhon.resources.first.child
 jhon_children << andrew.resources.limit(50)
 andrew_children = andrew.resources.first.child
 andrew_children << jhon.resources.limit(50)

