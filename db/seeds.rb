require "faker"

jhon = User.create(username:"Jhon Appleseed")

 1000.times do
    jhon.resources << Resource.create(title: Faker::Name.title, description: Faker::Lorem.paragraph(2, true))
 end

andrew = User.create(username:"Drew")

 500.times do
    andrew.resources << Resource.create(title: Faker::Name.title, description: Faker::Lorem.paragraph(2, true))
 end
 andrew = User.last
 jhon = User.first
 jhon_children = jhon.resources.first.children
 jhon_children << andrew.resources.limit(100)
 andrew_children = andrew.resources.first.children
 andrew_children << jhon.resources.limit(100)

 50.times do
   Category.create(name: Faker::Hacker.noun)
 end

 50.times do
   Tag.create(name: Faker::Lorem.word)
 end

 num = 0
 100.times do
   num += 1
   flag = num.to_s + '_' + num.to_s
   Vote.create(user_id: 1, resource_id: num, unique_identifier: flag, value: 1)
     Vote.create(user_id: 2, resource_id: num, unique_identifier: flag, value: 1)
 end

 resources = Resource.all

 resources.each do |element|
  element.tags << Tag.find(rand(40) + 1)
  element.tags << Tag.find(rand(40) + 1)
  element.tags << Tag.find(rand(40) + 1)
  element.tags << Tag.find(rand(40) + 1)
  element.tags << Tag.find(rand(40) + 1)
  element.categories << Category.find(rand(40) + 1)
  element.categories << Category.find(rand(40) + 1)
  element.categories << Category.find(rand(40) + 1)
  element.categories << Category.find(rand(40) + 1)
 end





