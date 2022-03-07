#!/bin/bash
inspec --chef-license accept  > /dev/null
inspec vendor aws_profile --overwrite
inspec exec aws_profile -t aws://us-east-1