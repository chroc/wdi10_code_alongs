require 'pry'

#Coffee Class
class Coffee
  attr_accessor :coffee_name, :sugars, :size, :customer_name
  @@number_of_coffees = 0 
  @@coffees = []

  def initialize(coffee_name, sugars, size, customer_name)
    @coffee_name = coffee_name 
    @sugars = sugars  
    @size = size
    @customer_name = customer_name
    @@number_of_coffees += 1
    @@coffees.push(self)
    puts "initialize: #{self}"
  end
  
  def to_s
    "#{customer_name}'s #{coffee_name}, #{size}, #{sugars} sugars"
  end
  
  def Coffee.amount
    @@number_of_coffees
    puts "coffee amount: #{self}"
  end

  def Coffee.coffees
    @@coffees
  end
end



# main program
Coffee.new('latte', 2, 'medium', 'bob')
Coffee.new('cappucino', 3, 'medium', 'matt')
binding.pry

