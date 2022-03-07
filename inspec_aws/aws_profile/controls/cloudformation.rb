describe aws_cloudformation_stack('ANonExistentStack') do
  it { should_not exist }
end