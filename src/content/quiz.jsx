export const quizzes =
    [
        {
            title: "AWS Certified developer associate (DVA-C02)",
            bg_name: "AWS_DVA_C02",
            data: [

                {
                    type: "singular",
                    quest: "A development team is building a new application that will run on Amazon EC2 and use Amazon DynamoDB as a storage layer. The developers all have assigned IAM user accounts in the same IAM group. The developers currently can launch EC2 instances, and they need to be able to launch EC2 instances with an instance role allowing access to Amazon DynamoDB. Which AWS IAM changes are needed when creating an instance role to provide this functionality?",
                    options: [
                        "Create an IAM permission policy attached to the role that allows access to DynamoDB. Add a trust policy to the role that allows DynamoDB to assume the role. Attach a permissions policy to the development group in AWS IAM that allows developers to use the iam:GetRole and iam:PassRole permissions for the role.",
                        " Create an IAM permissions policy attached to the role that allows access to DynamoDB. Add a trust policy to the role that allows Amazon EC2 to assume the role. Attach a permissions policy to the development group in AWS IAM that allows developers to use the iam:PassRole permission for the role.",
                        "Create an IAM permission policy attached to the role that allows access to Amazon EC2. Add a trust policy to the role that allows DynamoDB to assume the role. Attach a permissions policy to the development group in AWS IAM that allows developers to use the iam:PassRole permission for the role.",
                        "Create an IAM permissions policy attached to the role that allows access to DynamoDB. Add a trust policy to the role that allows Amazon EC2 to assume the role. Attach a permissions policy to the development group in AWS IAM that allows developers to use the iam:GetRole permission for the role."
                    ],
                    "answers": [1],
                    "explain": 
` <div>
                    <span className="font-semibold">Correct: Create an IAM permissions policy attached to the role that allows access to DynamoDB. Add a trust policy to the role that allows Amazon EC2 to assume the role. Attach a permissions policy to the development group in AWS IAM that allows developers to use the iam: PassRole permission for the role.</span>
                    <br/>
                    <span >
                        <span className="font-medium"> - Permissions Policy Attached to the Role:</span> <br/>
                        A permissions policy should be attached to the role that allows access to <span className="font-medium">Amazon DynamoDB</span> . This is necessary so that when the EC2 instances assume the role, they have the permissions to interact with DynamoDB. <br/>
                        <span className="font-medium">- Trust Policy Allowing Amazon EC2 to Assume the Role: </span> <br/>
                        The trust policy attached to the role must allow <span className="font-medium">Amazon EC2</span>  to assume the role. This is critical because EC2 instances will need to assume the role in order to gain access to the permissions defined in the policy. <br/>
                        <span className="font-medium">- Permissions Policy Allowing iam: PassRole Permission:</span> <br/>
                        The developers in the IAM group need permission to pass the role to EC2 instances they launch.The iam: PassRole permission allows them to specify the instance role when launching an EC2 instance.
                        Options A and C are incorrect because they include incorrect trust policies, specifying DynamoDB as the trusted entity. DynamoDB should not assume the role; instead, EC2 instances should.
                        Option D includes both <span className="font-medium">  iam: GetRole</span> and  <span className="font-medium"> iam: PassRole</span> permissions for the developers, but only iam: PassRole is necessary for them to launch instances with the appropriate role.
                        Therefore, B is the most accurate and complete choice for the given scenario.
                </span>
                </div>`

                },
                {
                    type: "singular",
                    quest: "A developer converted an existing program to an AWS Lambda function in the console. The program runs properly on a local laptop, but shows an 'Unable to import module' error when tested in the Lambda console. Which of the following can fix the error?",
                    options: [
                        "Install the missing module and specify the current directory as the target. Create a ZIP file to include all files under the current directory, and upload the ZIP file.",
                        "Install the missing module in a lib directory. Create a ZIP file to include all files under the lib directory, and upload the ZIP file as dependency file.",
                        "In the Lambda code, invoke a Linux command to install the missing modules under the /usr/lib directory.",
                        "In the Lambda console, create a LB_LIBRARY_PATH environment and specify the value for the system library plan."

                    ],

                    answers: [1],
                    explain: 
                    `<span className='font-semibold'>Correct: Install the missing module and specify the current directory as the target. Create a ZIP file to include all files under the current directory, and upload the ZIP file.</span> <br/>

                <span className='font-medium'>Install the missing module and specify the current directory as the target Creating a ZIP file with all files under the current directory:</span> This approach ensures that all required modules and dependencies are installed directly in the current directory, which is where <span className='font-medium'>AWS Lambda</span>  expects to find them when running the function. By creating a ZIP file of the entire directory (which includes the Lambda function code and the installed dependencies), you provide Lambda with everything it needs to execute the function correctly.
                 This is a straightforward and reliable approach. <br/>
                The other options, while technically possible in some circumstances, have drawbacks: <br/>
                <span className='font-medium'>Install the missing module in a lib directory and upload the ZIP file</span>: While using a lib directory can work, it adds complexity because Lambda needs to know where to find the modules. In the simplest case, installing them in the root directory of the Lambda function and zipping the whole directory is more straightforward. <br/>
                <span className='font-medium'>Invoke a Linux command to install missing modules:</span> Invoking a command to install missing modules in the Lambda environment is complex and may cause issues such as slower cold starts, unexpected behavior, or security concerns. <br/>
                <span className='font-medium'>Creating an environment variable for a library path: </span>  While this approach may sometimes work, it adds complexity and may lead to confusion about where modules should be installed and found. Furthermore, it can cause compatibility issues depending on the specific Lambda runtime and execution environment.`
     
                },
                {
                    quest: "A front-end web application is using Amazon Cognito user pools to handle the user authentication flow. A developer is integrating Amazon DynamoDB into the application using the AWS SDK for JavaScript. How would the developer securely call the API without exposing the access or secret keys?",
                    options: [
                        "Configure Amazon Cognito identity pools and exchange the JSON Web Token (JWT) for temporary credentials.",
                        "Run the web application in an Amazon EC2 instance with the instance profile configured.",
                        " Hardcore the credentials, use Amazon S3 to host the web application, and enable server-side encryption.",
                        " Use Amazon Cognito user pool JSON Web Tokens (JWITs) to access the DynamoDB APIs."
                    ],
                    answers: [0],
                    explain:
                        `
                    <span className='font-semibold'>Correct: Configure Amazon Cognito identity pools and exchange the JSON Web Token (JWT) for temporary credentials:
</span> <br/>

                <span>
                        This approach uses <span className='font-medium'>Amazon Cognito</span>  to authenticate the user and generate a JSON Web Token (JWT). The JWT can then be exchanged for temporary credentials using Amazon Cognito Identity Pools (Federated Identities).
                        These temporary credentials include an access key ID, secret access key, and session token that provide limited access to AWS services such as DynamoDB.
                        The temporary credentials have a limited lifespan and only grant the permissions required for the specific actions, minimizing the risk of security breaches.
                        This method keeps the access and secret keys secure because they are never directly exposed to the client application. <br />

                    <span className=''>Other options does not work because :</span> <br/>
                    <span className='font-medium'>Run the web application in an Amazon EC2 instance with the instance profile configured:</span> Running the web application in an EC2 instance with an instance profile configured allows the application to access AWS services with permissions specified by the instance profile.
                    While this method is secure for server-side applications, it is not suitable for front-end applications because the user's JWT and DynamoDB access should be handled client-side to avoid exposing secrets from the server-side to the client-side.
                    Additionally, the server would be managing authentication on behalf of the user, which is not ideal for a front-end application where the user's identity and permissions should be verified directly. <br/>
                    <span className='font-medium'>Hardcode the credentials, use Amazon S3 to host the web application, and enable server-side encryption:</span> <br/>
                    Hardcoding credentials in the application is a security risk because it could lead to unauthorized access if the credentials are exposed (e.g., if the codebase is leaked or compromised).
                    Hosting the application in Amazon S3 and enabling server-side encryption does not address the issue of hardcoded credentials being exposed. <br/>
                    <span className='font-medium'>
                        Use Amazon Cognito user pool JSON Web Tokens (JWITs) to access the DynamoDB APIs:</span> Amazon Cognito user pool JSON Web Tokens (JWITs) cannot be used directly to access DynamoDB APIs. DynamoDB requires AWS credentials (access key ID, secret access key, and session token) for access.
                        The JWT obtained from Cognito can be exchanged for temporary credentials using Amazon Cognito Identity Pools, which are then used to access DynamoDB.
                </span>`

                },
                {
                    quest: "A developer needs to manage AWS infrastructure as code and must be able to deploy multiple identical copies of the infrastructure, stage changes, and revert to previous versions. Which approach addresses these requirements?",
                    options: [
                        "Use cost allocation reports and AWS OpsWorks to deploy and manage the infrastructure.",
                        "Use Amazon CloudWatch metrics and alerts along with resource tagging to deploy and manage the infrastructure.",
                        "Use AWS Elastic Beanstalk and AWS CodeCommit to deploy and manage the infrastructure.",
                        "Use AWS CloudFormation and AWS CodeCommit to deploy and manage the infrastructure."
                    ],
                    answers: [1],
                    explain: `
                    <span className='font-semibold'>Correct: Use AWS CloudFormation and AWS CodeCommit to deploy and manage the infrastructure.</span> <br/>
                <span>
                    <span className='font-medium'> AWS CloudFormation: </span>CloudFormation is an Infrastructure as Code (IaC) service that allows you to define your AWS infrastructure as a template (in YAML or JSON format).
                    Using CloudFormation, you can deploy multiple identical copies of the infrastructure from the template, ensuring consistent and repeatable deployments.
                    It supports versioning and change management, allowing you to stage changes and roll back to previous versions in case of issues.
                    CloudFormation also integrates with other AWS services, providing a comprehensive and efficient way to manage your infrastructure. <br/>
                    <span className='font-medium'>  AWS CodeCommit: </span>CodeCommit is a source control service that allows you to store and manage your infrastructure templates (e.g., CloudFormation templates) securely.
                    By using CodeCommit, you can version your templates, track changes, and collaborate with other developers effectively.
                    This integration enables you to deploy changes using the stored templates and revert to previous versions if necessary. <br/>
                    The other options are not as suitable for addressing the developer's requirements: <br />
                    <span className='font-medium'>Use cost allocation reports and AWS OpsWorks to deploy and manage the infrastructure:</span> Cost allocation reports help monitor and manage costs, but they do not directly manage infrastructure deployment or versioning.
                    AWS OpsWorks is a configuration management service that automates server configuration and deployment, but it is not as flexible or comprehensive as CloudFormation for managing infrastructure as code.
                    <span className='font-medium'> Use Amazon CloudWatch metrics and alerts along with resource tagging to deploy and manage the infrastructure:</span> Amazon CloudWatch provides monitoring and alerting capabilities, which are useful for managing resources, but it does not manage infrastructure as code.
                    Resource tagging is helpful for organizing and tracking resources, but it does not offer infrastructure deployment or versioning capabilities. <br/>
                    <span className='font-medium'> Use AWS Elastic Beanstalk and AWS CodeCommit to deploy and manage the infrastructure: </span> AWS Elastic Beanstalk is a Platform as a Service (PaaS) that simplifies the deployment and scaling of web applications, but it does not offer the same level of control and flexibility as CloudFormation for managing AWS infrastructure as code.
                    While CodeCommit is useful for managing code and infrastructure templates, Elastic Beanstalk does not provide the same comprehensive approach to managing and deploying infrastructure as CloudFormation.
                </span>
                    `
                    
                },
                {
                    quest: 'A Developer needs to deploy an application running on AWS Fargate using Amazon ECS. The application has environment variables that must be passed to a container for the application to initialize. How should the environment variables be passed to the container?',
                    options: [" Define an array that includes the environment variables under the environment parameter within the service definition.",
                        "Define an array that includes the environment variables under the environment parameter within the task definition.",
                        "Define an array that includes the environment variables under the entryPoint parameter within the task definition.",
                        "Define an array that includes the environment variables under the entryPoint parameter within the service definition."
                        
                    ],
                    answers: [1],
                    explain: `
                     <span className='font-semibold'>Correct: Define an array that includes the environment variables under the environment parameter within the task definition.</span> <br/>
                <span>
                    Within the task definition, the developer can specify an array of environment variables under the environment parameter for each container.
                    Each entry in the array is an object with a name and value key, representing the name and value of the environment variable, respectively.
                    When the task is launched, the specified environment variables are passed to the container, allowing the application to initialize with the necessary configuration.
                    By defining the environment variables within the task definition, the variables are tied to the specific task and container configuration. This allows for more controlled and consistent deployment of the application across different environments.
<br/>
                    The other options are less suitable because: <br/>

                    <span className='font-medium'>Environment variables under the environment parameter within the service definition:</span> Environment variables should be specified in the task definition, not the service definition. The service definition is focused on managing the scaling and deployment of tasks, not their configuration.  <br/>
                    <span className='font-medium'>Environment variables under the entryPoint parameter within the task or service definition: </span> The entryPoint parameter specifies the command that should be executed when the container starts. It is not meant for defining environment variables.
                </span>
                    `
                    
                },
                {
                    quest: "A company's fleet of Amazon EC2 instances receives data from millions of users through an API. The servers batch the data, add an object for each user, and upload the objects to an S3 bucket to ensure high access rates. The object attributes are Customer ID, Server ID, TS-Server (TimeStamp and Server ID), the size of the object, and a timestamp. A Developer wants to find all the objects for a given user collected during a specified time range. After creating an S3 object created event, how can the Developer achieve this requirement?",
                    options: ["Execute an AWS Lambda function in response to the S3 object creation events that creates an Amazon DynamoDB record for every object with the Customer ID as the partition key and the Server ID as the sort key. Retrieve all the records using the Customer ID and Server ID attributes.",
                        "Execute an AWS Lambda function in response to the S3 object creation events that creates an Amazon Redshift record for every object with the Customer ID as the partition key and TS-Server as the sort key. Retrieve all the records using the Customer ID and TS-Server attributes.",
                        "Execute an AWS Lambda function in response to the S3 object creation events that creates an Amazon DynamoDB record for every object with the Customer ID as the partition key and TS-Server as the sort key. Retrieve all the records using the Customer ID and TS-Server attributes.",
                        "Execute an AWS Lambda function in response to the S3 object creation events that creates an Amazon Redshift record for every object with the Customer ID as the partition key and the Server ID as the sort key. Retrieve all the records using the Customer ID and Server ID attributes."
                        
                    ],
                    answers: [2],
                    explain: `
                    <span className='font-semibold'>Correct: Execute an AWS Lambda function in response to the S3 object creation events that creates an Amazon DynamoDB record for every object with the Customer ID as the partition key and TS-Server as the sort key. Retrieve all the records using the Customer ID and TS-Server attributes.</span> <br/>
                <span >
                    <span className='font-medium'> AWS Lambda Function in Response to S3 Object Creation Events: </span> <br/>

                    The Lambda function is triggered by S3 object creation events. When an object is uploaded to the S3 bucket, the Lambda function is executed.
                    The Lambda function extracts the relevant attributes from the S3 object (e.g., Customer ID, Server ID, TS-Server, object size, timestamp). <br/>
                    <span className='font-medium'>Create Amazon DynamoDB Record:</span> <br />

                    The Lambda function creates an Amazon DynamoDB record for each object.
                    The record uses the Customer ID as the partition key and the TS-Server (TimeStamp and Server ID) as the sort key.
                    This DynamoDB table structure allows efficient querying and filtering of records based on Customer ID and TS-Server. <br/>
                    <span className='font-medium'>Retrieve Records Using Customer ID and TS-Server Attributes: </span>
                    The developer can query the DynamoDB table using the partition key (Customer ID) and a time range based on the sort key (TS-Server).
                    This query provides efficient and fast access to the records of interest for the specified user and time range. <br/>
                    The other options are less suitable: <br/>

                    <span className='font-medium'> Creating an Amazon Redshift record: </span> <br/>
                    While Amazon Redshift can handle large datasets and support complex queries, it is a data warehousing service designed for OLAP (Online Analytical Processing) rather than OLTP (Online Transaction Processing).
                    Using DynamoDB, an OLTP service, is more appropriate for quick lookups and filtering based on Customer ID and TS-Server attributes.
                    Additionally, Redshift might introduce latency and higher costs for the specific use case of querying based on Customer ID and a time range.

                </span>
                    `
                    
                },
                {
                    quest: "A company is managing a NoSQL database on-premises to host a critical component of an application, which is starting to have scaling issues. The company wants to migrate the application to Amazon DynamoDB with the following considerations: Optimize frequent queries. Reduce read latencies. Plan for frequent queries on certain key attributes of the table. Which solution would help achieve these objectives?",
                    options: [
                        " Create global secondary indexes on keys that are frequently queried. Add the necessary attributes into the indexes.",
                        "Create local secondary indexes on keys that are frequently queried. DynamoDB will fetch needed attributes from the table.",
                        "Create DynamoDB global tables to speed up query responses. Use a scan to fetch data from the table.",
                        "Create an AWS Auto Scaling policy for the DynamoDB table."
                    ],
                    answers: [0],
                    explain: `
                    <span className='font-semibold'>Correct: Create global secondary indexes on keys that are frequently queried. Add the necessary attributes into the indexes.</span>

                <span>
                    <span className='font-medium'> Global Secondary Indexes (GSIs):</span> <br/>

                    GSIs allow you to define an alternate key (partition and sort key) for a DynamoDB table, which can be different from the primary key.
                    By creating GSIs on the keys that are frequently queried, you can optimize query performance and reduce read latencies for those queries.
                    GSIs maintain a separate copy of the data indexed by the specified key attributes, allowing quick lookups based on the alternate key. <br/>
                    <span className='font-medium'> Add Necessary Attributes: </span> <br/>
                    When creating the GSIs, you can specify the attributes you want to include in the index.
                    Including necessary attributes in the GSIs ensures that the query can retrieve the required data directly from the index without needing to fetch data from the base table, further reducing read latencies. <br/>
                    The other options are less suitable: <br/>

                    <span className='font-medium'>Local Secondary Indexes (LSIs):</span> <br/>  LSIs are limited to the same partition key as the base table but can have different sort keys.
                    They may not provide as much flexibility as GSIs for optimizing frequent queries on different keys.
                    <br />
                    <span className='font-medium'>DynamoDB Global Tables and scan :</span>
                    DynamoDB global tables offer cross-region replication and fast read/write access, but they may not directly optimize queries based on specific key attributes.
                    Using a scan to fetch data from the table can be expensive and inefficient, particularly for large tables. <br/>

                    <span className='font-medium'>AWS Auto Scaling Policy:</span> <br/>
                    Auto Scaling helps manage capacity and performance, but it does not specifically address optimizing queries or reducing read latencies.
                    Auto Scaling can be part of an overall strategy for managing table performance, but it should be complemented with other optimizations such as GSIs for query optimization.
                </span>
                    `
                }

            ]
        }

    ]




// head: `Correct: Create an IAM permissions policy attached to the role that allows access to DynamoDB.Add a trust policy to the role that allows Amazon EC2 to assume the role.Attach a permissions policy to the development group in AWS IAM that allows developers to use the iam: PassRole permission for the role. `,
//     body: `Permissions Policy Attached to the Role:
//             A permissions policy should be attached to the role that allows access to Amazon DynamoDB.This is necessary so that when the EC2 instances assume the role, they have the permissions to interact with DynamoDB.
// Trust Policy Allowing Amazon EC2 to Assume the Role:
//             The trust policy attached to the role must allow Amazon EC2 to assume the role.This is critical because EC2 instances will need to assume the role in order to gain access to the permissions defined in the policy.
// Permissions Policy Allowing iam: PassRole Permission:
//             The developers in the IAM group need permission to pass the role to EC2 instances they launch.The iam: PassRole permission allows them to specify the instance role when launching an EC2 instance.
// Options A and C are incorrect because they include incorrect trust policies, specifying DynamoDB as the trusted entity.DynamoDB should not assume the role; instead, EC2 instances should.
// Option D includes both iam: GetRole and iam: PassRole permissions for the developers, but only iam: PassRole is necessary for them to launch instances with the appropriate role.
//             Therefore, B is the most accurate and complete choice for the given scenario.`