class Zombie
  attr_reader :name, :brains

  def initialize(name, brains=0)
    @name = name 
    @brains = brains
  end
  
  def hungry?
    true
  end
end

