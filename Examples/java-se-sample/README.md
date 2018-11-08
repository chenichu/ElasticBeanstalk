#Jave-SE AWS Sample App with ALB and HTTPS

1) java-se sample app obtained from https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/tutorials.html
2) Elastic Beanstalk environment created from EB CLI
3) Environment configured to use ALB using .ebextensions (https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/configuring-https-elb.html)
4) Reverse proxy nginx was extened with a .conf file to extend default behavior for HTTPS redirect.

HTTP traffic flow:

    Internet (HTTP)  -> ALB (HTTP) --> EC2 Instance

Traffic gets redirect back to the internet with HTTPS, resulting in HTTPS traffic flow below:

    Internet (HTTPS)  -> ALB (HTTP) --> EC2 Instance