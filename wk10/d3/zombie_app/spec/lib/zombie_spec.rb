require 'zombie'

describe Zombie do
  let(:zombie) { Zombie.new("graham") }

  it "is named graham" do
    expect(zombie.name).to eq("graham")
  end

  it "has no brains" do
    expect(zombie.brains).to be < 1
  end

  it "should be hungry" do
    expect(zombie).to be_hungry
  end
end

