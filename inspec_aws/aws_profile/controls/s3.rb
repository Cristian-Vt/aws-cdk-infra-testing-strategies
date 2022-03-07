describe aws_s3_bucket(bucket_name: 'aws-cdk-infra-testing-strategies') do
  it { should exist }
  it { should_not be_public }
end