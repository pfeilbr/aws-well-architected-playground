

# foundationaltechnicalreview.json


---

## operationalExcellence

### How does your organization ensure that contractually obligated compliance standards are met and maintained?

Evaluate contractual compliance requirements
> *A thorough evaluation of your contractual compliance requirements provides your organization with clarity around risks, challenges, necessary procedures, and deadlines that you need to meet.*

Document and share requirements
> *Documentation ensures that stakeholders have a common understanding of compliance requirements, how they will be maintained, how they will be evaluated, and what controls they are subject to.*

Implement controls
> *Executing on necessary procedures based on documented compliance requirements ensures achievement of compliance goals.*

Monitor compliance
> *Monitoring allows your organization to determine if controls are still in place or if there are needed changes.*

Maintain compliance
> *Because compliance requirements may change periodically, it is important to stay up to date and implement controls in order to ensure that your organization maintains compliance.*

None of these
> 



---


---

## security

### How do you secure your AWS accounts?

Root user is used only by exception
> *The root user of an account has full access and must only be used by exception.*

Root user has multi-factor authentication (MFA) enabled.
> *If an account is not managed by AWS Organizations, enabling MFA provides an additional control for account sign-in.*

Root user has no access keys
> *Access keys must not be assigned to the root user under any circumstances.*

Configure AWS account contacts
> *If an account is not managed by AWS Organizations, alternate account contacts help AWS get in contact with the appropriate personnel if needed.*

Separate accounts are used for production and non-production stages.
> *Multiple AWS accounts allow you to separate workloads and workload stages, such as production and non-production.*

Separate accounts are used for critical and shared services
> *Multiple AWS accounts allow you to separate data and resources, and enable the use of Service Control Policies to implement guardrails.*

Use AWS Organizations to manage your accounts.
> *Use AWS Organizations to centrally enforce policy-based management and consolidated billing for multiple AWS accounts.*

Restrict access to the AWS Organizations management account
> *The AWS Organizations management account is the AWS account that you used to create your organization and has access to all other accounts.*

None of these
> 


### How do you configure identities for people and machines?

Enforce multi-factor authentication (MFA) for all administrators.
> *Enforcing multi-factor authentication (MFA) for all administrators provides an additional control for sign-in.*

All IAM users have multi-factor authentication (MFA) enabled
> *While transitioning from IAM users to a centralized identity provider for workforce identities, or roles for cross-account access, all IAM users must have MFA enabled.*

Use roles for cross-account access
> *Roles provide a secure method of accessing AWS accounts when implemented with a unique external ID and least privilege permissions.*

Use unique external ID for cross-account roles
> *Generating a unique external ID for each customer improves the security of cross-account access using roles.*

Store secrets in specialized service
> *Where you cannot use temporary credentials, such as tokens from AWS Security Token Service (AWS STS), store your secrets (for example, database passwords) using AWS Secrets Manager, which handles encryption, rotation, and access control.*

Audit identities quarterly
> *Auditing the identities that are configured in your identity provider and IAM helps ensure that only authorized identities have access to your workload. For example, remove people that leave the organization, and remove cross-account roles that are no longer required.*

Centralize identities for all administrators
> *Centralizing identities using either AWS Single Sign-On or a third-party provider help avoid routinely creating IAM users or using long-term access keys. This approach makes it easier to manage multiple AWS accounts and federated applications.*

Use temporary credentials for API and CLI access
> *To reduce the risk of unintended access to access keys, require identities, such as administrators, to dynamically acquire temporary credentials.*

None of these
> 


### How do you control permissions for people and machines?

Review IAM policies granting privileged access
> *Grant only the access that identities require by allowing access to specific actions on specific AWS resources under specific conditions. Policies should only allow full “*” administrative privileges as an exception.*

Configure AWS Organizations Service Control Policies (SCPs)
> *Establish common controls that restrict access to all identities in your organization. For example, you can restrict access to specific AWS Regions, or prevent your operators from deleting common resources, such as an IAM role used for your security team.*

Use IAM Access Analyzer
> *AWS IAM Access Analyzer helps you identify the resources in your organization and accounts, such as Amazon S3 buckets or IAM roles, that are shared with an external entity.*

None of these
> 


### How are you capturing foundational events?

Configure CloudTrail multi-Region
> *AWS CloudTrail enables governance, compliance, operational auditing, and risk auditing of your AWS account. With CloudTrail, you can log, continuously monitor, and retain account activity related to actions across your AWS infrastructure.*

Protect log storage from unintended access
> *Protecting log storage locations from unintended access (e.g. versioning and object lock on S3) helps with avoiding any unintended changes to log files.*

Enable CloudTrail log file integrity validation
> *A validated log file using integrity validation enables you to assert positively that the log file itself has not changed.*

Configure centralized threat detection for AWS accounts, workloads, and data
> *Configure threat detection, such as Amazon GuardDuty, that monitors for malicious activity and unauthorized behavior to protect your AWS accounts, workloads, and data.*

Configure Amazon VPC Flow Logs
> *VPC Flow Logs enables you to capture information about the IP traffic going to and from network interfaces in your VPC.*

Configure Amazon S3 access logging
> *Server access logging provides detailed records for the requests that are made to a bucket.*

Configure AWS Config
> *AWS Config provides a detailed view of the configuration of AWS resources in your AWS account. This view includes how the resources are related to one another and how they were previously configured so that you can see how the configurations and relationships have changed over time.*

Store logs in central account with limited access
> *Configure logs to flow to a central account, and protect the logs from manipulation or deletion.*

Configure AWS Security Hub foundational best practices
> *The AWS Foundational Security Best Practices standard is a set of controls that detect when your accounts and resources deviate from security best practices.*

None of these
> 


### How are you alerting on foundational events?

People are notified to take action on critical events
> *Ensure that someone with the ability to take action receives notifications from alerts automatically.*

Alerts create a ticket or task that is tracked
> *Alerts from all sources, such as from GuardDuty, automatically create a ticket or task in your management system that allows for tracking and recording a history of events. Automatically creating trouble tickets is the best way to ensure that GuardDuty findings are integrated with your operational processes.*

Events are escalated
> *Events must be escalated if the person or team responsible for investigating is unresponsive or unable to resolve the problem.*

None of these
> 


### How do you manage vulnerabilities?

Patch EC2 operating systems automatically
> *Use an automated patch management solution, such as AWS Systems Manager Patch Manager, to automate the patching process of all systems and code for which you are responsible, including your operating system, applications, and code dependencies.*

Scan source code libraries and dependencies
> *Frequently scan and patch for bugs in your code and dependencies to help protect against new security issues.*

Scan infrastructure
> *Frequently scan your infrastructure for misconfigurations and bugs to help protect against new security issues.*

None of these
> 


### How do you configure your network protection?

Implement distributed denial of service (DDoS) protection
> *Protecting your internet facing resources, such as web applications, from a DDoS attempt helps maintain availability to users.*

VPC security groups restrict inbound and outbound traffic
> *Use security groups for controlling inbound and outbound traffic, and automatically apply rules for both security groups and Web Application Firewall (WAF) using AWS Firewall Manager.*

Configure subnets to create layers
> *Group components that share reachability requirements into layers. For example, a database cluster in a VPC with no need for internet access should be placed in subnets with no route to or from the internet.*

Periodically review unrestricted security groups
> *Unrestricted security groups, which allow access from the internet for any network, expose your workload to unnecessary risk. They should only be used when absolutely necessary, for example to allow HTTPS (TCP 443) to an Elastic Load Balancer with AWS WAF enabled.*

None of these
> 


### How do you protect sensitive data at rest?

Identify sensitive data
> *Identify sensitive data, such as Personally Identifiable Information (PII), that you are storing in your workload.*

Encrypt all sensitive data at rest
> *All data that you have identified or classified as sensitive must be encrypted at rest. Encryption maintains the confidentiality of sensitive data even when it gets misplaced. Encryption can be enabled in AWS services, or client-side.*

Log access to sensitive data comprehensively throughout the system
> *Visibility into any unexpected access to sensitive data provides you with the opportunity to perform necessary corrective actions to further protect your data.*

Manage encryption keys with AWS Key Management Service
> *AWS Key Management Service (AWS KMS) should be used to protect data at rest across AWS services and your applications where possible. Use different keys, and access control to the keys, combined with the AWS IAM and resource policies, to align with data classification levels and segregation requirements.*

Review permissions of all Amazon S3 buckets
> *Review S3 bucket and object permissions:Regularly review the level of access granted in Amazon S3 bucket policies, and grant read or write permissions for those buckets based on least privilege. Use AWS Config to detect buckets that are publicly available and Amazon CloudFront to serve content from Amazon S3.*

Enable default encryption for Amazon S3 Buckets
> *Amazon S3 bucket encryption helps maintain the confidentiality of your data.*

Enable default encryption for Amazon EBS volumes
> *Amazon EBS volume encryption helps maintain the confidentiality of your data.*

Periodically review shared data
> *Assessing shared data periodically allows you to identify and implement necessary changes to data access policies. This minimizes the risk that you are exposing sensitive data to unintended users.*

None of these
> 


### How are you protecting sensitive data in transit?

Manage certificates centrally with Certificate Manager
> *AWS Certificate Manager lets you easily provision, manage, and deploy public and private Secure Sockets Layer&#x2F;Transport Layer Security (SSL&#x2F;TLS) certificates for use with AWS services.*

Only use protocols with encryption
> *Enable encryption for all network traffic, including Transport Layer Security (TLS) for web-based network infrastructure you control.*

Block or redirect insecure protocols
> *Secure protocols keep your data protected in transit.*

None of these
> 


### How have you prepared for a security event?

Create an incident response (IR) runbook for root account credential misuse
> *Begin your IR planning by building a runbook that will help you if your root account credentials are ever misused.*

Practice responding to events
> *Simulate and practice incident response by running game days, incorporating the lessons learned into your incident management plans, and continuously improving them.*

Create roles for incident responders
> *Ensure that incident responders have the correct access pre-provisioned in AWS to reduce the time for investigation through to recovery.*

None of these
> 



---


---

## reliability

### How do you plan for disaster recovery (DR)?

Define a Recovery Point Objective (RPO) according to your organizational needs.
> *Your data loss tolerance is the basis of your backup strategy and frequency.*

Establish a Recovery Time Objective (RTO) to meet business needs and expectations. This should be on the order of minutes for all components that are critical for providing service to your customers, but should never exceed 24 hours.
> *The ability to restore business operations within the first 24 hours of an outage is critical to promote positive customer experiences.*

None of these
> 



---



# saas.json


---

## operationalExcellence

### How do you effectively monitor and manage the operational health of a multi-tenant environment?

Include tenant context into application logs
> *Operational tools aggregate log activity, enabling operations teams to inspect the health and activity of the system, individual tenants, and tenant tiers.*

Collect detailed tenant insights
> *Instrumentation is added to the SaaS application, enabling it to emit a collection of detailed tenant insights that enable detailed operational analysis of tenant activity, health, and consumption trends. Operations teams leverage business intelligence (BI) tools to analyze this tenant-infused data.*

Use purpose-built, tenant-aware tools to enable proactive management of tenant workloads
> *Use tools to provide detailed tenant operational data to enable operations teams to analyze and evaluate activity, consumption, and health through the lens of tenants and tiers. These tools enable the implementation of proactive policies and alarms.*

None of these
> 


### How are you capturing and surfacing metric data that can be used to analyze the usage and consumption trends of individual tenants?

Capture low fidelity tenant activity metrics
> *Use packaged frameworks and tools that can capture and surface readliy available application and system insights with minimal instrumentation, injecting tenant context where possible.*

Instrument high-value workflows of the system with tenant-aware metrics
> *Targeted, high-value areas of the system are instrumented with metrics that provide insights on workflows and use cases that are essential to understanding the customer experience and consumption patterns of these high-value targets. Use analytics tools to analyze and surface operationally significant data.*

Create a complete view of tenant consumption
> *The SaaS application is fully instrumented with metrics that capture a range of tenant activity, feature usage, and resource consumption events. These metrics enable product managers, architects, and operations teams to build analytics views of this data to drive technical and business decisions.*

None of these
> 


### How are new tenants onboarded to your system?

Use manually triggered scripts to provision tenants
> *All the steps required to onboard a new tenant are performed through one or more automated scripts that provision all the elements of the tenant footprint (infrastructure, tenant, admin user, etc.).*

Use a single automated process to onboard tenants
> *Onboarding of a new tenant is triggered and executed by a single automation process that runs end-to-end without manual intervention.*

Provide a fully automated, self-service user experience that configures and executes tenant provisioning
> *Users (internal or customers) complete a registration form that collects all of their configuration data before launching the onboarding process. This process executes the onboarding steps needed to introduce a new tenant into the system.*

None of these
> 


### How do you support the need for tenant-specific customizations?

Use feature flags to manage tenant variations
> *Support feature and functional variations through the introduction of flags that are enabled and disabled on a tenant-by-tenant basis.*

Support unique tenant requirements via shared application customizations
> *Address any need for variation through the introduction of generalized application customization constructs that are configured as part of the tenant configuration process.*

None of these
> 



---


---

## security

### How are you associating tenant context with users and applying that context within your SaaS architecture?

Use application services to generate a unified SaaS identity
> *SaaS application services map users to tenants, yielding a single representation of the user&#x2F;tenant identity that can be passed to downstream services.*

Use an identity provider to bind users to tenants
> *An identity provider manages both user and tenant data, enabling a single authentication experience to return a representation that includes the union of these two concepts. This unified representation is conveyed to all services, eliminating the need to resolve tenant context via separate services.*

Create libraries and frameworks that apply tenant context outside the view of developers
> *The details of tenant context are hidden from developers through the introduction of libraries and frameworks that own responsibility for extracting and applying the tenant context that is passed into each service.*

None of these
> 


### How are you ensuring that tenant resources are protected from cross-tenant access?

Use coarse-grained constructs, application-enforced policies, or both
> *Some applications might use more coarse-grained constructs, such as accounts or VPCs, to isolate tenant resources. Access to more fine-grained or shared infrastructure resources are controlled through application-enforced policies.*

Apply a combination of IAM and application-enforced policies
> *AWS Identity and Access Management (IAM) policies are used to restrict access to those tenant resources that can be isolated by IAM roles and policies. Application-enforced policies protect resources that cannot be expressed by IAM policies.*

None of these
> 



---


---

## reliability

### How do you limit an individual tenant’s ability to impose load that may impact availability for other tenants of your system?

 Use throttling policies to limit the effect that noisy tenants have on the system
> *Define strategies for capturing and identifying tenants that are imposing excess load on the system that might not be supported at scale. Apply throttling policies to help ensure that these noisy neighbor tenants do not impact the availability of the other tenants of your system.*

Define SLAs for each tenant tier
> *Limit the area of effect of lower tier tenants by introducing SLAs that are configured for each tenant tier supported by your system. Use SLAs as part of a throttling strategy to tightly control the level of activity and load a tenant can place on the system.*

Partition tenant load to limit the area of effect
> *Identify partitioning strategies that can effectively distribute or isolate tenant loads, enabling the resources (compute, storage, etc.) to effectively limit access, scale, and distribute spikey tenant loads.*

None of these
> 


### How do you proactively detect and maintain tenant health?

Add tenant context to application logs to reactively manage tenant health
> *Log files are enriched with tenant context and analyzed by operations teams to reactively identify and troubleshoot reliability issues. Tenant context is used to identify specific tenant activity that might be contributing to system or tenant stability or availability issues.*

Introduce detailed tenant insights to enhance health forensics
> *Publish detailed tenant activity, consumption, performance, and error data to a centralized repository that can be used to analyze health issues impacting reliability. Use this data to identify challenging multi-tenant reliability events.*

Proactively identify tenant issues with policies and alarms
> *Combine rich tenant insights with policies to proactively surface tenant issues before they impact the stability or availability of the environment. These policies might invoke self-healing strategies for individual tenant and surface alerts and alarms.*

None of these
> 


### How are you testing the multi-tenant capabilities of your SaaS application?

Validate “noisy neighbor” scale and availability
> *Test various noisy neighbor conditions, assessing the system’s ability to identify and respond to scenarios where a subset of tenants places a disproportionate load on your system. Develop a suite of tests that assess the system’s ability to apply scaling, throttling, and tiering policies for a range of tenant tiers and profiles.*

Exercise key workflows under multi-tenant load
> *Identify a range of workflows that might be key to your customer experience, implementing tests that validate your system’s ability to support SLAs under multi-tenant load. Assess the system’s stability as tenants place a mix of loads at varying levels of tenant activity.*

Validate the scale and repeatability of tenant onboarding
> *Ensure that your tenant onboarding experience can reliably and repeatably onboard tenants with varying patterns and configurations. Verify that the onboarding process continues to meet target SLAs.*

Ensure that tenancy configuration changes are successfully propagated
> *Validate that the system is correctly applying and propagating changes to tenant billing accounts. Changes to account state, such as status and tier, must be shared between the billing system and your SaaS environment. Tests must validate that synchronization of this state is successfully processed.*

Validate tenant isolation
> *Simulate interactions with your system to help ensure that the tenant isolation policies and practices are being successfully applied. Include tests that examine scenarios where a developer’s multi-tenant code could unintentionally cross a tenant boundary.*

None of these
> 



---


---

## performance

### How do you prevent one tenant from adversely impacting the experience of another tenant?

Silo high demand tenant resources
> *Identify the potential bottlenecks in your system that might create noisy neighbor conditions and distribute these into separate siloes. The separation can happen across layers of your architecture, including compute, storage, messaging, and so on. Siloes should only be introduced at the layer that represents the bottleneck of the experience.*

Combine tenant-aware policies with added capacity to address tenant spikes
> *Tenant-aware policies are used to identify potential spikes in tenant activity that could adversely impact performance. These policies are combined with a capacity strategy that adds scaling “cushion” to help ensure that scaling delays don’t impact tenant performance.*

Use throttling policies to prevent individual tenants from placing excess load on the system
> *Introduce throttling policies that evaluate the activity trends of individual tenants and uses SLAs and their tier and plan to prevent saturation of one or more experiences in the system. Prevent lower tier tenants from impacting the performance of higher tier tenants.*

Decompose and deploy services in a pattern that aligns tenant loads with performance expectations
> *The design of your SaaS system has accounted for common usage scenarios, examined potential bottlenecks, and partitioned resources to ensure that the load is effectively distributed. You have aligned scaling behavior with the consumption profiles of tenants.*

None of these
> 


### How do you ensure that consumption of infrastructure resources aligns with the activity and workloads of tenants?

Use tenant profile data to configure static scaling policies
> *Use logs and profiling data to analyze tenant loads and periodically configure infrastructure scaling policies based on historical consumption trends.*

Build dynamic tenant scaling policies around standard AWS metrics
> *Rely on the readily accessible AWS infrastructure metrics to define a series of policies that approximate tenant consumption activity. Use these metrics to build policies that move you closer to aligning tenant activity with resource consumption.*

Scale based on application-generated tenant insights
> *SaaS specific metric data is captured, aggregated, and used (along with other metrics) to build a robust multi-tenant scaling strategy that minimizes the over-provisioning of resources in based on live workloads.*

None of these
> 


### How do you enable varying levels of performance for the different tenant tiers and plans?

Apply throttling to lower tier tenants
> *The performance of lower tier tenants is constrained to enhance the performance and experience for premium tier tenant. These constraints might motivate tenants to move to higher tiers to achieve better performance for key functional aspects of the system.*

Use policies to shape application performance for each tenant tier
> *Introduce constructs to manage and apply tier-based performance policies across the key workflows and use cases of your application. These policies define a more internal and external performance SLAs that are used to define the experience of each SaaS tier and plan.*

Optimize the experience for different tenant tiers
> *The services of your application are decomposed and deployed around tiers, offering siloed or optimized experiences for workflows that impose heavy load or require optimal throughput.*

None of these
> 



---


---

## costOptimization

### How do you measure the resource consumption of individual tenants?

Approximate tenant consumption
> *A simple metric (for example, number of requests) is used to create an approximate allocation of consumption for each tenant. Manual processes are used to correlate this tenant allocation with your AWS bill to arrive at a rough estimate of the cost per tenant.*

Build a rich view of tenant consumption
> *The consumption of the application’s individual resources is metered and attributed to each tenant. This data is aggregated and used to create a detailed estimate of tenant consumption.*

Use tenant consumption insights to shape operational and architectural efficiency
> *Tenant consumption data is used to provide actionable insights to operational and architecture teams, enabling them to introduce policies and strategies that can enhance to analyze and improve the efficiency of a multi-tenant system.*

None of these
> 


### How are you correlating tenant consumption with the costs of your infrastructure?

Manually aggregate and correlate consumption with costs
> *Tools are used to manually collect and aggregate cost data for a period. The data is summarized for services and correlated with a tenant consumption data to calculate a cost-per-tenant.*

Use automation to correlate tenant consumption with AWS costs
> *An automated mechanism acquires cost data from AWS or third-party tools, and correlates this data with tenant consumption allocations to determine the cost per tenant.*

None of these
> 



---



# serverless.json


---

## operationalExcellence

### How do you evaluate your Serverless application’s health?

Understand, analyze, and alert on metrics provided out of the box
> *Each managed service emits metrics out of the box. Establish key metrics for each managed service as the basis for comparison, and for identifying under and over performing . Examples of key metrics include function errors, queue depth, failed state machine executions, and response times.*

Use distributed tracing and code is instrumented with additional context
> *Instrument your application code to emit information about its status, correlation identifiers, business outcomes, and information to determine transaction flows across your .*

Use structured and centralized logging
> *Standardize your application logging to emit operational information about transactions, correlation identifiers, request identifiers across , and business outcomes. Use this information to answer arbitrary questions about the state of your .*

Use application, business, and operations metrics
> *Identify key performance indicators (KPIs) based on desired business and customer outcomes. Evaluate KPIs to determine workload success and operational health.*

None of these
> 


### How do you approach application lifecycle management?

Use infrastructure as code and stages isolated in separate environments
> *Use infrastructure as code and version control to enable tracking of changes and releases. Isolate development and production stages in separate environments. This reduces errors caused by manual processes and helps increase levels of control to gain confidence your workload operates as intended.*

Prototype new features using temporary environments
> *Use infrastructure as code to create temporary environments for new features you may need to prototype, and tear them down as you complete them. Temporary environments allows for higher fidelity when working with managed services, and increase levels of control to gain confidence your workload integrates and operates as intended.*

Use a rollout deployment mechanism
> *Use rollout deployment as opposed to all-at-once mechanisms. Rollout deployment can limit application changes to a small set of customers in production gradually while all-at-once is used for non-production systems.*

Use configuration management
> *Use configuration management systems to make and track configuration changes. These systems reduce errors caused by manual processes, reduce the level of effort to deploy changes, and help isolate configuration to business logic.*

Review the function runtime deprecation policy
> *AWS provided function runtimes follow official long-term support deprecation policies. Third-party provided runtime deprecation policy may differ from official long-term support. Consider reviewing your runtime deprecation policy and having a mechanism to report on runtimes that if deprecated may affect your workload to operate as intended.*

Use CI&#x2F;CD including automated testing across separate accounts
> *Automate build, deployment, testing, and rollback of the  upon KPI and operational alerts. This eases troubleshooting, enables faster remediation and feedback time, and enable automatic and manual rollback&#x2F;roll-forward should an alert trigger.*

None of these
> 



---


---

## security

### How do you control access to your Serverless API?

Use appropriate endpoint type and mechanisms to secure access to your API
> *API Gateway can have public and private endpoints and the level of mechanisms to provide secure access to each may differ. Consider public endpoints to serve consumers where they may not be part of your network perimeter. Consider private to serve consumers in your network perimeter where you may not want to expose publicly.*

Use authentication and authorization mechanisms
> *Integrate with an Identity Provider who can validate your API consumers identity (for example, SAML, JWT, etc.) and only authorize access to successfully authenticated consumers instead of API keys. This will help prevent unauthorized access to your workload from non-authenticated users.*

Scope access based on identity’s metadata
> *Authenticated users should be segregated into logical groups, roles, tiers or based on custom authentication token attributes (for example, SAML&#x2F;JWT claims). Consider using users identity metadata to enable fine-grain control access to resources and actions.*

None of these
> 


### How do you manage your Serverless application’s security boundaries?

Evaluate and define resource policies
> *Resource policies can restrict inbound access to managed services. Consider using resource policies to restrict access to your component based on the source IP address&#x2F;range, geolocation, function event source, version, alias, queues, etc.*

Use temporary credentials between resources and components
> *Credentials and permissions policies should not be shared between any resources in order to maintain a granular segregation of permissions.*

Control network traffic at all layers
> *Apply controls for controlling both ingress and egress traffic, including data loss prevention. Functions deployed to virtual private networks must consider network access restrict resource access.*

Design smaller, single purpose functions
> *Grant automated or programmatic access to users or roles with only the minimum privileges needed in order to reduce the risk of unauthorized access. Creating smaller, single purpose functions enables you to keep your permissions aligned to least privileged access, and reduces the risk of compromise since the function will do less.*

None of these
> 


### How do you implement application Security in your workload?

Review security awareness documents frequently
> *Stay up to date with both AWS and industry security best practices to understand and evolve protection of the workload.*

Store secrets that are used in your code securely
> *Store your secrets such as database passwords or API keys in a Secrets Manager that allows for rotation, secure and audited access.*

Implement runtime protection to help prevent against malicious code execution
> *Runtime protection enables you to disable features like spawning child processes, network access or local filesystem access in your Lambda functions.*

Automatically review workload’s code dependencies&#x2F;libraries
> *Regularly review of application and code dependencies is good industry security practice and helps you detect and prevent non-certified application code.*

Validate inbound events
> *Sanitize inbound events and validate them against a predefined schema. Test your inputs by using fuzzing techniques.*

None of these
> 



---


---

## reliability

### How do you regulate inbound request rates?

Use throttling to control inbound request rates
> *Use throttling limits to control inbound requests by setting steady-state and burst rates limits.*

Use, analyze, and enforce API quotas
> *API quotas limit the maximum number of requests that can be submitted within a specified time interval with a given API key.*

Use mechanisms to protect non-scalable resources
> *Functions can scale faster than traditional resources, such as relational databases and cache systems. Protect non-scalable resources by adapting fast scaling components to downstream systems throughput.*

None of these
> 


### How do you build resiliency into your Serverless application?

Manage transaction, partial, and intermittent failures
> *Transaction failures might occur when components are under high load. Partial failures can occur during batch processing, while intermittent failures might occur due to network or other transient issues.*

Manage duplicate and unwanted events
> *Duplicate events can occur when a request is retried, multiple consumers process the same message from a queue or stream, or when a request is sent twice at different time intervals with the same parameters. Design your applications to process multiple identical requests to have the same effect as making a single request. Events not adhering to your schema should be discarded.*

Orchestrate long-running transactions
> *Long-running transactions can be processed by one or multiple components. Favor state machines for long-running transaction instead of handling them within application code in a single component or multiple synchronous dependency call chains.*

Consider scaling patterns at burst rates
> *In addition to your baseline performance, consider evaluating how your workload handle initial burst rates that may be expected or unexpected peaks.*

None of these
> 



---


---

## performance

### How do you optimize your Serverless application’s performance?

Measure, evaluate, and select optimum capacity units
> *Capacity units can be function memory size, stream shards, database reads&#x2F;writes request units, API endpoints, etc.*

Measure and optimize function startup time
> *Evaluate function startup time for both performance and cost.*

Take advantage of concurrency via async and stream-based function invocations
> *Functions can be executed synchronously and asynchronously. A functions’ concurrency model can be better used via asynchronous and stream-based invocations. Queues, streams, or events can be aggregated resulting in more efficient processing time per invocation rather than invocation per request-response approach.*

Optimize access patterns and apply caching where applicable
> *Consider caching data that may not need to be frequently up-to-date, and optimize access patterns to only fetch data that is necessary to end users.*

Integrate with managed services directly over functions when possible
> *Consider using native integration between managed services as opposed to functions when no custom logic or data transformation is required.*

None of these
> 



---


---

## costOptimization

### How do you optimize your Serverless application’s costs?

Minimize external calls and function code initialization
> *Functions may call other managed services and third-party APIs to operate as intended. Functions may also use application dependencies that may not be suitable for ephemeral environments. Reviewing and optimizing both can directly impact on value provided per invocation.*

Optimize logging output and its retention
> *Review logging level, logging output, and log retention to ensure that they meet your operational needs. This helps prevent unnecessary logging and data retention while ensuring that you have the minimum levels necessary for workload operation.*

Optimize function configuration to reduce cost
> *Functions unit of scale is memory where CPU, Network and I&#x2F;O are proportionately allocated. Consider benchmarking and reviewing whether you are under&#x2F;overutilising what your function is allocated to. Benchmark your Lambda function execution with various memory settings as under some conditions the added Memory&#x2F;CPU may lower the duration and with this new combination reduce the cost of each invocation.*

Use cost-aware usage patterns in code
> *Reduce the time consumed by running functions by eliminating job-polling or task coordination.*

None of these
> 



---



# wellarchitected.json


---

## operationalExcellence

### How do you determine what your priorities are?

Evaluate external customer needs
> *Involve key stakeholders, including business, development, and operations teams, to determine where to focus efforts on external customer needs.
               This will ensure that you have a thorough understanding of the operations support that is required to achieve your desired business outcomes.*

Evaluate internal customer needs
> *Involve key stakeholders, including business, development, and operations teams, when determining where to focus efforts on internal customer needs.
               This will ensure that you have a thorough understanding of the operations support that is required to achieve business outcomes.*

Evaluate governance requirements
> *Ensure that you are aware of guidelines or obligations defined by your organization that may mandate or emphasize specific focus. Evaluate internal factors, such as organization policy, standards, and requirements. Validate that you have mechanisms to identify changes to governance. If no governance requirements are identified, ensure that you have applied due diligence to this determination.*

Evaluate compliance requirements
> *Evaluate external factors, such as regulatory compliance requirements and industry standards, 
               to ensure that you are aware of guidelines or obligations that may mandate or emphasize specific focus.
               If no compliance requirements are identified, ensure that you apply due diligence to this determination.*

Evaluate threat landscape
> *Evaluate threats to the business (for example, competition, business risk and liabilities, operational risks, and information security threats) and maintain current information in a risk registry. Include the impact of risks when determining where to focus efforts.*

Evaluate tradeoffs
> *Evaluate the impact of tradeoffs between competing interests or alternative approaches, to help make informed decisions when determining where to focus efforts or choosing a course of action. For example, accelerating speed to market for new features may be emphasized over cost optimization, or you may choose a relational database for non-relational data to simplify the effort to migrate a system, rather than migrating to a database optimized for your data type and updating your application.*

Manage benefits and risks
> *Manage benefits and risks to make informed decisions when determining where to focus efforts. For example, it may be beneficial to deploy a workload with unresolved issues so that significant new features can be made available to customers. It may be possible to mitigate associated risks, or it may become unacceptable to allow a risk to remain, in which case you will take action to address the risk.*

None of these
> 


### How do you structure your organization to support your business outcomes?

Resources have identified owners
> *Understand who has ownership of each application, workload, platform, and infrastructure component, what business value is provided by that component, and why that ownership exists. Understanding the business value of these individual components and how they support business outcomes informs the processes and procedures applied against them.*

Processes and procedures have identified owners
> *Understand who has ownership of the definition of individual processes and procedures, why those specific process and procedures are used, and why that ownership exists. Understanding the reasons that specific processes and procedures are used enables identification of improvement opportunities.*

Operations activities have identified owners responsible for their performance
> *Understand who has responsibility to perform specific activities on defined workloads and why that responsibility exists. Understanding who has responsibility to perform activities informs who will conduct the activity, validate the result, and provide feedback to the owner of the activity.*

Team members know what they are responsible for
> *Understanding the responsibilities of your role and how you contribute to business outcomes informs the prioritization of your tasks and why your role is important. This enables team members to recognize needs and respond appropriately.*

Mechanisms exist to identify responsibility and ownership
> *Where no individual or team is identified, there are defined escalation paths to someone with the authority to assign ownership or plan for that need to be addressed.*

Mechanisms exist to request additions, changes, and exceptions
> *You are able to make requests to owners of processes, procedures, and resources. Make informed decisions to approve requests where viable and determined to be appropriate after an evaluation of benefits and risks.*

Responsibilities between teams are predefined or negotiated
> *There are defined or negotiated agreements between teams describing how they work with and support each other (for example, response times, service level objectives, or service level agreements). Understanding the impact of the teams’ work on business outcomes, and the outcomes of other teams and organizations, informs the prioritization of their tasks and enables them to respond appropriately.*

None of these
> 


### How does your organizational culture support your business outcomes?

Executive Sponsorship
> *Senior leadership clearly sets expectations for the organization and evaluates success. Senior leadership is the sponsor, advocate, and driver for the adoption of best practices and evolution of the organization*

Team members are empowered to take action when outcomes are at risk
> *The workload owner has defined guidance and scope empowering team members to respond when outcomes are at risk. Escalation mechanisms are used to get direction when events are outside of the defined scope.*

Escalation is encouraged
> *Team members have mechanisms and are encouraged to escalate concerns to decision makers and stakeholders if they believe outcomes are at risk. Escalation should be performed early and often so that risks can be identified, and prevented from causing incidents.*

Communications are timely, clear, and actionable
> *Mechanisms exist and are used to provide timely notice to team members of known risks and planned events. Necessary context, details, and time (when possible) are provided to support determining if action is necessary, what action is required, and to take action in a timely manner. For example, providing notice of software vulnerabilities so that patching can be expedited, or providing notice of planned sales promotions so that a change freeze can be implemented to avoid the risk of service disruption.*

Experimentation is encouraged
> *Experimentation accelerates learning and keeps team members interested and engaged. An undesired result is a successful experiment that has identified a path that will not lead to success. Team members are not punished for successful experiments with undesired results. Experimentation is required for innovation to happen and turn ideas into outcomes.*

Team members are enabled and encouraged to maintain and grow their skill sets
> *Teams must grow their skill sets to adopt new technologies, and to support changes in demand and responsibilities in support of your workloads. Growth of skills in new technologies is frequently a source of team member satisfaction and supports innovation. Support your team members’ pursuit and maintenance of industry certifications that validate and acknowledge their growing skills. Cross train to promote knowledge transfer and reduce the risk of significant impact when you lose skilled and experienced team members with institutional knowledge. Provide dedicated structured time for learning.*

Resource teams appropriately
> *Maintain team member capacity, and provide tools and resources, to support your workload needs. Overtasking team members increases the risk of incidents resulting from human error. Investments in tools and resources (for example, providing automation for frequently executed activities) can scale the effectiveness of your team, enabling them to support additional activities.*

Diverse opinions are encouraged and sought within and across teams
> *Leverage cross-organizational diversity to seek multiple unique perspectives. Use this perspective to increase innovation, challenge your assumptions, and reduce the risk of confirmation bias. Grow inclusion, diversity, and accessibility within your teams to gain beneficial perspectives.*

None of these
> 


### How do you design your workload so that you can understand its state?

Implement application telemetry
> *Instrument your application code to emit information about its internal state, status, and achievement of business outcomes. For example, queue depth, error messages, and response times. Use this information to determine when a response is required.*

Implement and configure workload telemetry
> *Design and configure your workload to emit information about its internal state and current status. For example, API call volume, HTTP status codes, and scaling events. Use this information to help determine when a response is required.*

Implement user activity telemetry
> *Instrument your application code to emit information about user activity, for example, click streams, or started, abandoned, and completed transactions. Use this information to help understand how the application is used, patterns of usage, and to determine when a response is required.*

Implement dependency telemetry
> *Design and configure your workload to emit information about the status (for example, reachability or response time) of resources it depends on. Examples of external dependencies can include, external databases, DNS, and network connectivity. Use this information to determine when a response is required.*

Implement transaction traceability
> *Implement your application code and configure your workload components to emit information about the flow of transactions across the workload. Use this information to determine when a response is required and to assist you in identifying the factors contributing to an issue.*

None of these
> 


### How do you reduce defects, ease remediation, and improve flow into production?

Use version control
> *Use version control to enable tracking of changes and releases.*

Test and validate changes
> *Test and validate changes to help limit and detect errors.
               Automate testing to reduce errors caused by manual processes, and reduce the level of effort to test.*

Use configuration management systems
> *Use configuration management systems to make and track configuration changes. 
               These systems reduce errors caused by manual processes and reduce the level of effort to deploy changes.*

Use build and deployment management systems
> *Use build and deployment management systems.
               These systems reduce errors caused by manual processes and reduce the level of effort to deploy changes.*

Perform patch management
> *Perform patch management to gain features, address issues, and remain compliant with governance. 
               Automate patch management to reduce errors caused by manual processes, and reduce the level of effort to patch.*

Share design standards
> *Share best practices across teams 
               to increase awareness 
               and maximize the benefits of development efforts.*

Implement practices to improve code quality
> *Implement practices 
               to improve code quality 
               and minimize defects. 
               For example, test-driven development, code reviews, and standards adoption.*

Use multiple environments
> *Use multiple environments to experiment, develop, and test your workload. Use increasing levels of controls as environments approach production to gain confidence your workload will operate as intended when deployed.*

Make frequent, small, reversible changes
> *Frequent, small, and reversible changes reduce the scope and impact of a change.
               This eases troubleshooting, enables faster remediation, and provides the option to roll back a change.*

Fully automate integration and deployment
> *Automate build, deployment, and testing of the workload. 
               This reduces errors caused by manual processes and reduces the effort to deploy changes.*

None of these
> 


### How do you mitigate deployment risks?

Plan for unsuccessful changes
> *Plan to revert to a known good state, 
               or remediate in the production environment 
               if a change does not have the desired outcome.
               This preparation reduces recovery time through faster responses.*

Test and validate changes
> *Test changes and validate the results at all lifecycle stages to confirm new features and minimize the risk and impact of failed deployments.*

Use deployment management systems
> *Use deployment management systems 
               to track and implement change. 
               This reduces errors cause by manual processes and reduces the effort to deploy changes.*

Test using limited deployments
> *Test with limited deployments alongside existing systems 
               to confirm desired outcomes prior to full scale deployment.
               For example, use deployment canary testing or one-box deployments.*

Deploy using parallel environments
> *Implement changes onto parallel environments, and then transition over to the new environment. Maintain the prior environment until there is confirmation of successful deployment. Doing so minimizes recovery time by enabling rollback to the previous environment.*

Deploy frequent, small, reversible changes
> *Use frequent, small, and reversible changes to reduce the scope of a change.
               This results in easier troubleshooting and faster remediation with the option to roll back a change.*

Fully automate integration and deployment
> *Automate build, deployment, and testing of the workload. 
               This reduces errors cause by manual processes and reduces the effort to deploy changes.*

Automate testing and rollback
> *Automate testing of deployed environments to confirm desired outcomes.
               Automate rollback to previous known good state when outcomes are not achieved to minimize recovery time and reduce errors caused by manual processes.*

None of these
> 


### How do you know that you are ready to support a workload?

Ensure personnel capability
> *Have a mechanism to validate that you have the appropriate number of trained personnel to provide support for operational needs. Train personnel and adjust personnel capacity as necessary to maintain effective support.*

Ensure consistent review of operational readiness
> *Ensure you have a consistent review of your readiness to operate a workload. Reviews must include, at a minimum, the operational readiness of the teams and the workload, and security requirements. Implement review activities in code and trigger automated review in response to events where appropriate, to ensure consistency, speed of execution, and reduce errors caused by manual processes.*

Use runbooks to perform procedures
> *Runbooks are documented procedures to achieve specific outcomes. 
               Enable consistent and prompt responses to well-understood events by documenting procedures in runbooks. 
               Implement runbooks as code and trigger the execution of runbooks in response to events where appropriate,
               to ensure consistency, speed responses, and reduce errors caused by manual processes.*

Use playbooks to investigate issues
> *Enable consistent and prompt responses to issues that are not well understood, by documenting the investigation process in playbooks. Playbooks are the predefined steps performed to identify the factors contributing to a failure scenario. The results from any process step are used to determine the next steps to take until the issue is identified or escalated.*

Make informed decisions to deploy systems and changes
> *Evaluate the capabilities of the team to support the workload and the workload&#39;s compliance with governance.
               Evaluate these against the benefits of deployment when determining whether to transition a system or change into production.
               Understand the benefits and risks to make informed decisions.*

None of these
> 


### How do you understand the health of your workload?

Identify key performance indicators
> *Identify key performance indicators (KPIs) based on desired business outcomes (for example, order rate, customer retention rate, and profit versus operating expense) and customer outcomes (for example, customer satisfaction). Evaluate KPIs to determine workload success.*

Define workload metrics
> *Define workload metrics to measure the achievement of KPIs (for example, abandoned shopping carts, orders placed, cost, price, and allocated workload expense). Define workload metrics to measure the health of the workload (for example, interface response time, error rate, requests made, requests completed, and utilization). Evaluate metrics to determine if the workload is achieving desired outcomes, and to understand the health of the workload.*

Collect and analyze workload metrics
> *Perform regular proactive reviews of metrics
               to identify trends and determine where appropriate responses are needed.*

Establish workload metrics baselines
> *Establish baselines for metrics to provide expected values as the basis for comparison and identification of under and over performing components. Identify thresholds for improvement, investigation, and intervention.*

Learn expected patterns of activity for workload
> *Establish patterns of workload activity to identify anomalous behavior so that you can respond appropriately if required.*

Alert when workload outcomes are at risk
> *Raise an alert when workload outcomes are at risk so that you can respond appropriately if necessary.*

Alert when workload anomalies are detected
> *Raise an alert when workload anomalies are detected so that you can respond appropriately if necessary.*


               Validate the achievement of outcomes and the effectiveness of KPIs and metrics
            
> *Create a business-level view of your workload operations
               to help you determine if you are satisfying needs and 
               to identify areas that need improvement to reach business goals.
               Validate the effectiveness of KPIs and metrics 
               and revise them if necessary.*

None of these
> 


### How do you understand the health of your operations?

Identify key performance indicators
> *Identify key performance indicators (KPIs) based on desired business (for example, new features delivered) and customer outcomes (for example, customer support cases). Evaluate KPIs to determine operations success.*

Define operations metrics
> *Define operations metrics to measure the achievement of KPIs (for example, successful deployments, and failed deployments). Define operations metrics to measure the health of operations activities (for example, mean time to detect an incident (MTTD), and mean time to recovery (MTTR) from an incident). Evaluate metrics to determine if operations are achieving desired outcomes, and to understand the health of your operations activities.*

Collect and analyze operations metrics
> *Perform regular, proactive reviews of metrics to identify trends and determine where appropriate responses are needed.*

Establish operations metrics baselines
> *Establish baselines for metrics to provide expected values as the basis for comparison and identification of under and over performing operations activities.*

Learn the expected patterns of activity for operations
> *Establish patterns of operations activities to identify anomalous activity so that you can respond appropriately if necessary.*

Alert when operations outcomes are at risk
> *Raise an alert when operations outcomes are at risk so that you can respond appropriately if necessary.*

Alert when operations anomalies are detected
> *Raise an alert when operations anomalies are detected so that you can respond appropriately if necessary.*


               Validate the achievement of outcomes and the effectiveness of KPIs and metrics
            
> *Create a business-level view of your operations activities
               to help you determine if you are satisfying needs and 
               to identify areas that need improvement to reach business goals.
               Validate the effectiveness of KPIs and metrics 
               and revise them if necessary.*

None of these
> 


### How do you manage workload and operations events?

Use processes for event, incident, and problem management
> *Have processes to address observed events, events that require intervention (incidents), 
               and events that require intervention and either recur or cannot currently be resolved (problems). 
               Use these processes to mitigate the impact of these events on the business and your customers 
               by ensuring timely and appropriate responses.*

Have a process per alert
> *Have a well-defined response (runbook or playbook), 
               with a specifically identified owner, 
               for any event for which you raise an alert.
               This ensures effective and prompt responses to operations events 
               and prevents actionable events from being obscured by less valuable notifications.*

Prioritize operational events based on business impact
> *Ensure that when multiple events require intervention, 
               those that are most significant to the business are addressed first.
               For example, impacts can include loss of life or injury, financial loss, or damage to reputation or trust.*

Define escalation paths
> *Define escalation paths in your runbooks and playbooks, 
               including what triggers escalation, and
               procedures for escalation. 
               Specifically identify owners for each action 
               to ensure effective and prompt responses to operations events.*

Enable push notifications
> *Communicate directly with your users (for example, with email or SMS) when the services they use are impacted, and again when the services return to normal operating conditions, to enable users to take appropriate action.*

Communicate status through dashboards
> *Provide dashboards tailored to their target audiences (for example, internal technical teams, leadership, and customers)
               to communicate the current operating status of the business and provide metrics of interest.*

Automate responses to events
> *Automate responses to events to reduce errors caused by manual processes, and to ensure prompt and consistent responses.*

None of these
> 


### How do you evolve operations?

Have a process for continuous improvement
> *Regularly evaluate and prioritize opportunities for improvement
               to focus efforts where they can provide the greatest benefits.*

Perform post-incident analysis
> *Review customer-impacting events, and identify the contributing factors
               and preventative actions. Use this information to develop mitigations to limit or prevent recurrence. Develop procedures for prompt and effective responses. Communicate contributing factors and corrective actions as appropriate, tailored to target audiences.*

Implement feedback loops
> *Include feedback loops in your procedures and workloads
               to help you identify issues and areas that need improvement.*

Perform Knowledge Management
> *Mechanisms exist for your team members to discover the information that they are looking for in a timely manner, access it, and identify that it’s current and complete. Mechanisms are present to identify needed content, content in need of refresh, and content that should be archived so that it’s no longer referenced.*

Define drivers for improvement
> *Identify drivers for improvement 
               to help you evaluate and prioritize opportunities.*

Validate insights
> *Review your analysis results and responses with cross-functional teams and business owners. 
               Use these reviews to establish common understanding, identify additional impacts, and determine courses of action. 
               Adjust responses as appropriate.*

Perform operations metrics reviews
> *Regularly perform retrospective analysis of operations metrics with cross-team participants from different areas of the business. 
               Use these reviews to identify opportunities for improvement, potential courses of action, and to share lessons learned.*

Document and share lessons learned
> *Document and share lessons learned from the execution of operations activities 
               so that you can use them internally and across teams.*

Allocate time to make improvements
> *Dedicate time and resources within your processes 
               to make continuous incremental improvements possible.*

None of these
> 



---


---

## security

### How do you securely operate your workload?

Separate workloads using accounts
> *Organize workloads in separate accounts and group accounts based on function or a common set of controls rather than mirroring your company’s reporting structure. Start with security and infrastructure in mind to enable your organization to set common guardrails as your workloads grow.*

Secure AWS account
> *Secure access to your accounts, for example by enabling MFA and restrict use of the root user, and configure account contacts.*

Identify and validate control objectives
> *Based on your compliance requirements and risks identified from your threat model, derive and validate the control objectives and controls that you need to apply to your workload. Ongoing validation of control objectives and controls help you measure the effectiveness of risk mitigation.*

Keep up to date with security threats
> *Recognize attack vectors by staying up to date with the latest security threats to help you define and implement appropriate controls.*

Keep up to date with security recommendations
> *Stay up to date with both AWS and industry security recommendations to evolve the security posture of your workload.*

Automate testing and validation of security controls in pipelines
> *Establish secure baselines and templates for security mechanisms that are tested and validated as part of your build, pipelines, and processes. Use tools and automation to test and validate all security controls continuously. For example, scan items such as machine images and infrastructure as code templates for security vulnerabilities, irregularities, and drift from an established baseline at each stage.*

Identify and prioritize risks using a threat model
> *Use a threat model to identify and maintain an up-to-date register of potential threats. Prioritize your threats and adapt your security controls to prevent, detect, and respond. Revisit and maintain this in the context of the evolving security landscape.*

Evaluate and implement new security services and features regularly
> *AWS and APN Partners constantly release new features and services that allow you to evolve the security posture of your workload.*

None of these
> 


### How do you manage identities for people and machines?

Use strong sign-in mechanisms
> *Enforce minimum password length, and educate users to avoid common or re-used passwords. Enforce multi-factor authentication (MFA) with software or hardware mechanisms to provide an additional layer.*

Use temporary credentials
> *Require identities to dynamically acquire temporary credentials. For workforce identities, use AWS Single Sign-On, or federation with IAM roles to access AWS accounts. For machine identities, require the use of IAM roles instead of long term access keys.*

Store and use secrets securely
> *For workforce and machine identities that require secrets such as passwords to third party applications, store them with automatic rotation using the latest industry standards in a specialized service.*

Rely on a centralized identity provider
> *For workforce identities, rely on an identity provider that enables you to manage identities in a centralized place. This enables you to create, manage, and revoke access from a single location making it easier to manage access. This reduces the requirement for multiple credentials and provides an opportunity to integrate with HR processes.*

Audit and rotate credentials periodically
> *When you cannot rely on temporary credentials and require long term credentials, audit credentials to ensure that the defined controls (for example, MFA) are enforced, rotated regularly, and have appropriate access level.*

Leverage user groups and attributes
> *Place users with common security requirements in groups defined by your identity provider, and put mechanisms in place to ensure that user attributes that may be used for access control (e.g., department or location) are correct and updated. Use these groups and attributes, rather than individual users, to control access. This allows you to manage access centrally by changing a user’s group membership or attributes once, rather than updating many individual policies when a user’s access needs change.*

None of these
> 


### How do you manage permissions for people and machines?

Define access requirements
> *Each component or resource of your workload needs to be accessed by administrators, end users, or other components. Have a clear definition of who or what should have access to each component, choose the appropriate identity type and method of authentication and authorization.*

Grant least privilege access
> *Grant only the access that identities require by allowing access to specific actions on specific AWS resources under specific conditions. Rely on groups and identity attributes to dynamically set permissions at scale, rather than defining permissions for individual users. For example, you can allow a group of developers access to manage only resources for their project. This way, when a developer is removed from the group, access for the developer is revoked everywhere that group was used for access control, without requiring any changes to the access policies.*

Establish emergency access process
> *A process that allows emergency access to your workload in the unlikely event of an automated process or pipeline issue. This will help you rely on least privilege access, but ensure users can obtain the right level of access when they require it. For example, establish a process for administrators to verify and approve their request.*

Reduce permissions continuously
> *As teams and workloads determine what access they need, remove permissions they no longer use and establish review processes to achieve least privilege permissions. Continuously monitor and reduce unused identities and permissions.*

Define permission guardrails for your organization
> *Establish common controls that restrict access to all identities in your organization. For example, you can restrict access to specific AWS Regions, or prevent your operators from deleting common resources, such as an IAM role used for your central security team.*

Manage access based on life cycle
> *Integrate access controls with operator and application life cycle and your centralized federation provider. For example, remove a user’s access when they leave the organization or change roles.*

Analyze public and cross account access
> *Continuously monitor findings that highlight public and cross account access. Reduce public access and cross account access to only resources that require this type of access.*

Share resources securely
> *Govern the consumption of shared resources across accounts or within your AWS Organization. Monitor shared resources and review shared resource access.*

None of these
> 


### How do you detect and investigate security events?

Configure service and application logging
> *Configure logging throughout the workload, including application logs, resource logs, and AWS service logs. For example, ensure that AWS CloudTrail, Amazon CloudWatch Logs, Amazon GuardDuty and AWS Security Hub are enabled for all accounts within your organization.*

Analyze logs, findings, and metrics centrally
> *All logs, metrics, and telemetry should be collected centrally, and automatically analyzed to detect anomalies and indicators of unauthorized activity. A dashboard can provide you easy to access insight into real-time health. For example, ensure that Amazon GuardDuty and Security Hub logs are sent to a central location for alerting and analysis.*

Automate response to events
> *Using automation to investigate and remediate events reduces human effort and error, and enables you to scale investigation capabilities. Regular reviews will help you tune automation tools, and continuously iterate. For example, automate responses to Amazon GuardDuty events by automating the first investigation step, then iterate to gradually remove human effort.*

Implement actionable security events
> *Create alerts that are sent to and can be actioned by your team. Ensure that alerts include relevant information for the team to take action. For example, ensure that Amazon GuardDuty and AWS Security Hub alerts are sent to the team to action, or sent to response automation tooling with the team remaining informed by messaging from the automation framework.*

None of these
> 


### How do you protect your network resources?

Create network layers
> *Group components that share reachability requirements into layers. For example, a database cluster in a VPC with no need for internet access should be placed in subnets with no route to or from the internet. In a serverless workload operating without a VPC, similar layering and segmentation with microservices can achieve the same goal.*

Control traffic at all layers
> *Apply controls with a defense in depth approach for both inbound and outbound traffic. For example, for Amazon Virtual Private Cloud (VPC) this includes security groups, Network ACLs, and subnets. For AWS Lambda, consider running in your private VPC with VPC-based controls.*

Automate network protection
> *Automate protection mechanisms to provide a self-defending network based on threat intelligence and anomaly detection. For example, intrusion detection and prevention tools that can pro-actively adapt to current threats and reduce their impact.*

Implement inspection and protection
> *Inspect and filter your traffic at each layer. For example, use a web application firewall to help protect against inadvertent access at the application network layer. For Lambda functions, third-party tools can add application-layer firewalling to your runtime environment.*

None of these
> 


### How do you protect your compute resources?

Perform vulnerability management
> *Frequently scan and patch for vulnerabilities in your code, dependencies, and in your infrastructure to help protect against new threats.*

Reduce attack surface
> *Reduce your attack surface by hardening operating systems, minimizing components, libraries, and externally consumable services in use.*

Implement managed services
> *Implement services that manage resources, such as Amazon RDS, AWS Lambda, and Amazon ECS, to reduce your security maintenance tasks as part of the shared responsibility model.*

Automate compute protection
> *Automate your protective compute mechanisms including vulnerability management, reduction in attack surface, and management of resources.*

Enable people to perform actions at a distance
> *Removing the ability for interactive access reduces the risk of human error, and the potential for manual configuration or management. For example, use a change management workflow to deploy EC2 instances using infrastructure as code, then manage EC2 instances using tools instead of allowing direct access or a bastion host.*

Validate software integrity
> *Implement mechanisms (for example, code signing) to validate that the software, code, and libraries used in the workload are from trusted sources and have not been tampered with.*

None of these
> 


### How do you classify your data?

Identify the data within your workload
> *This includes the type and classification of data, the associated business processes. data owner, applicable legal and compliance requirements, where it’s stored, and the resulting controls that are needed to be enforced. This may include classifications to indicate if the data is intended to be publicly available, if the data is internal use only such as customer personally identifiable information (PII), or if the data is for more restricted access such as intellectual property, legally privileged or marked sensititve, and more.*

Define data protection controls
> *Protect data according to its classification level. For example, secure data classified as public by using relevant recommendations while protecting sensitive data with additional controls.*

Automate identification and classification
> *Automate identification and classification of data to reduce the risk of human error from manual interactions.*

Define data lifecycle management
> *Your defined lifecycle strategy should be based on sensitivity level, as well as legal and organization requirements. Aspects including the duration you retain data for, data destruction, data access management, data transformation, and data sharing should be considered.*

None of these
> 


### How do you protect your data at rest?

Implement secure key management
> *Encryption keys must be stored securely, with
               strict access control, for example, by using a key management service such as AWS
               KMS. Consider using different keys, and access control to the keys, combined with the
               AWS IAM and resource policies, to align with data classification levels and
               segregation requirements.*

Enforce encryption at rest
> *Enforce your encryption requirements based on the
               latest standards and recommendations to help protect your data at rest.*

Automate data at rest protection
> *Use automated tools to validate and enforce data at
               rest protection continuously, for example, verify that there are only encrypted
               storage resources.*

Enforce access control
> *Enforce access control with least privileges and
               mechanisms, including backups, isolation, and versioning, to help protect your data
               at rest. Prevent operators from granting public access to your data.*

Use mechanisms to keep people away from data
> *Keep all users away from directly accessing
               sensitive data and systems under normal operational circumstances. For example,
               provide a dashboard instead of direct access to a data store to run queries. Where
               CI&#x2F;CD pipelines are not used, determine which controls and processes are required to
               adequately provide a normally disabled break-glass access mechanism.*

None of these
> 


### How do you protect your data in transit?

Implement secure key and certificate
               management
> *Store encryption keys and certificates securely and
               rotate them at appropriate time intervals while applying strict access control; for
               example, by using a certificate management service, such as AWS Certificate Manager
               (ACM).*

Enforce encryption in transit
> *Enforce your defined encryption requirements based
               on appropriate standards and recommendations to help you meet your organizational,
               legal, and compliance requirements.*

Automate detection of unintended data
               access
> *Use tools such as GuardDuty to automatically detect
               attempts to move data outside of defined boundaries based on data classification
               level, for example, to detect a trojan that is copying data to an unknown or
               untrusted network using the DNS protocol.*

Authenticate network communications
> *Verify the identity of communications by using
               protocols that support authentication, such as Transport Layer Security (TLS) or
               IPsec.*

None of these
> 


### How do you anticipate, respond to, and recover from incidents?

Identify key personnel and external resources
> *Identify internal and external personnel, resources, and legal obligations that would help your organization respond to an incident.*

Develop incident management plans
> *Create plans to help you respond to, communicate during, and recover from an incident. For example, you can start an incident response plan with the most likely scenarios for your workload and organization. Include how you would communicate and escalate both internally and externally.*

Prepare forensic capabilities
> *Identify and prepare forensic investigation capabilities that are suitable, including external specialists, tools, and automation.*

Automate containment capability
> *Automate containment and recovery of an incident to reduce response times and organizational impact.*

Pre-provision access
> *Ensure that incident responders have the correct access pre-provisioned into AWS to reduce the time for investigation through to recovery.*

Pre-deploy tools
> *Ensure that security personnel have the right tools pre-deployed into AWS to reduce the time for investigation through to recovery.*

Run game days
> *Practice incident response game days (simulations) regularly, incorporate lessons learned into your incident management plans, and continuously improve.*

None of these
> 



---


---

## reliability

### How do you manage service quotas and constraints?

Aware of service quotas and constraints
> *You are aware of your default quotas and quota increase requests for your workload architecture. You additionally know which resource constraints, such as disk or network, are potentially impactful.*

Manage service quotas across accounts and regions
> *If you are using multiple AWS accounts or AWS Regions, ensure that you request the appropriate quotas in all environments in which your production workloads run.*

Accommodate fixed service quotas and constraints through architecture
> *Be aware of unchangeable service quotas and physical resources, and architect to prevent these from impacting reliability.*

Monitor and manage quotas
> *Evaluate your potential usage and increase your quotas appropriately allowing for planned growth in usage.*

Automate quota management
> *Implement tools to alert you when thresholds are being approached. By using AWS Service Quotas APIs, you can automate quota increase requests.*

Ensure that a sufficient gap exists between the current quotas and the maximum usage to accommodate failover
> *When a resource fails, it may still be counted against quotas until its successfully terminated. Ensure that your quotas cover the overlap of all failed resources with replacements before the failed resources are terminated. You should consider an Availability Zone failure when calculating this gap.*

None of these
> 


### How do you plan your network topology?

Use highly available network connectivity for your workload public endpoints
> *These endpoints and the routing to them must be highly available. To achieve this, use highly available DNS, content delivery networks (CDNs), API Gateway, load balancing, or reverse proxies.*

Provision redundant connectivity between private networks in the cloud and on-premises environments
> *Use multiple AWS Direct Connect (DX) connections or VPN tunnels between separately deployed private networks. Use multiple DX locations for high availability. If using multiple AWS Regions, ensure redundancy in at least two of them. You might want to evaluate AWS Marketplace appliances that terminate VPNs. If you use AWS Marketplace appliances, deploy redundant instances for high availability in different Availability Zones.*

Ensure IP subnet allocation accounts for expansion and availability
> *Amazon VPC IP address ranges must be large enough to accommodate workload requirements, including factoring in future expansion and allocation of IP addresses to subnets across Availability Zones. This includes load balancers, EC2 instances, and container-based applications.*

Prefer hub-and-spoke topologies over many-to-many mesh
> *If more than two network address spaces (for example, VPCs and on-premises networks) are connected via VPC peering, AWS Direct Connect, or VPN, then use a hub-and-spoke model, like that provided by AWS Transit Gateway.*

Enforce non-overlapping private IP address ranges in all private address spaces where they are connected
> *The IP address ranges of each of your VPCs must not overlap when peered or connected via VPN. You must similarly avoid IP address conflicts between a VPC and on-premises environments or with other cloud providers that you use. You must also have a way to allocate private IP address ranges when needed.*

None of these
> 


### How do you design your workload service architecture?

Choose how to segment your workload
> *Monolithic architecture should be avoided. Instead, you should choose between SOA and microservices. When making each choice, balance the benefits against the complexities—what is right for a new product racing to first launch is different than what a workload built to scale from the start needs. The benefits of using smaller segments include greater agility, organizational flexibility, and scalability. Complexities include possible increased latency, more complex debugging, and increased operational burden*

Build services focused on specific business domains and functionality
> *SOA builds services with well-delineated functions defined by business needs. Microservices use domain models and bounded context to limit this further so that each service does just one thing.  Focusing on specific functionality enables you to differentiate the reliability requirements of different services, and target investments more specifically.  A concise business problem and having a small team associated with each service also enables easier organizational scaling.*

Provide service contracts per API
> *Service contracts are documented agreements between teams on service integration and include a machine-readable API definition, rate limits, and performance expectations. A versioning strategy allows clients to continue using the existing API and migrate their applications to the newer API when they are ready. Deployment can happen anytime, as long as the contract is not violated. The service provider team can use the technology stack of their choice to satisfy the API contract. Similarly, the service consumer can use their own technology.*

None of these
> 


### How do you design interactions in a distributed system to prevent failures?

Identify which kind of distributed system is required
> *Hard real-time distributed systems require responses to be given synchronously and rapidly, while soft real-time systems have a more generous time window of minutes or more for response. Offline systems handle responses through batch or asynchronous processing. Hard real-time distributed systems have the most stringent reliability requirements.*

Implement loosely coupled dependencies
> *Dependencies such as queuing systems, streaming systems, workflows, and load balancers are loosely coupled. Loose coupling helps isolate behavior of a component from other components that depend on it, increasing resiliency and agility*

Make all responses idempotent
> *An idempotent service promises that each request is completed exactly once, such that making multiple identical requests has the same effect as making a single request. An idempotent service makes it easier for a client to implement retries without fear that a request will be erroneously processed multiple times. To do this, clients can issue API requests with an idempotency token—the same token is used whenever the request is repeated. An idempotent service API uses the token to return a response identical to the response that was returned the first time that the request was completed.*

Do constant work
> *Systems can fail when there are large, rapid changes in load. For example, a health check system that monitors the health of thousands of servers should send the same size payload (a full snapshot of the current state) each time. Whether no servers are failing, or all of them, the health check system is doing constant work with no large, rapid changes.*

None of these
> 


### How do you design interactions in a distributed system to mitigate or withstand failures?

Implement graceful degradation to transform applicable hard dependencies into soft dependencies
> *When a component&#39;s dependencies are unhealthy, the component itself can still function, although in a degraded manner. For example, when a dependency call fails, failover to a predetermined static response.*

Throttle requests
> *This is a mitigation pattern to respond to an unexpected increase in demand. Some requests are honored but those over a defined limit are rejected and return a message indicating they have been throttled. The expectation on clients is that they will back off and abandon the request or try again at a slower rate.*

Control and limit retry calls
> *Use exponential backoff to retry after progressively longer intervals. Introduce jitter to randomize those retry intervals, and limit the maximum number of retries.*

Fail fast and limit queues
> *If the workload is unable to respond successfully to a request, then fail fast. This allows the releasing of resources associated with a request, and permits the service to recover if it’s running out of resources.  If the workload is able to respond successfully but the rate of requests is too high, then use a queue to buffer requests instead. However, do not allow long queues that can result in serving stale requests that the client has already given up on.*

Set client timeouts
> *Set timeouts appropriately, verify them systematically, and do not rely on default values as they are generally set too high*

Make services stateless where possible
> *Services should either not require state, or should offload state such that between different client requests, there is no dependence on locally stored data on disk or in memory. This enables servers to be replaced at will without causing an availability impact. Amazon ElastiCache or Amazon DynamoDB are good destinations for offloaded state.*

Implement emergency levers
> *These are rapid processes that may mitigate availability impact on your workload. They can be operated in the absence of a root cause. An ideal emergency lever reduces the cognitive burden on the resolvers to zero by providing fully deterministic activation and deactivation criteria. Example levers include blocking all robot traffic or serving a static response. Levers are often manual, but they can also be automated.*

None of these
> 


### How do you monitor workload resources?

Monitor all components for the workload (Generation)
> *Monitor the components of the workload with Amazon CloudWatch or third-party tools. Monitor AWS services with Personal Health Dashboard*

Define and calculate metrics (Aggregation)
> *Store log data and apply filters where necessary to calculate metrics, such as counts of a specific log event, or latency calculated from log event timestamps*

Send notifications (Real-time processing and alarming)
> *Organizations that need to know, receive notifications when significant events occur*

Automate responses (Real-time processing and alarming)
> *Use automation to take action when an event is detected, for example, to replace failed components*

Storage and Analytics
> *Collect log files and metrics histories and analyze these for broader trends and workload insights*

Conduct reviews regularly
> *Frequently review how workload monitoring is implemented and update it based on significant events and changes*

Monitor end-to-end tracing of requests through your system
> *Use AWS X-Ray or third-party tools so that developers can more easily analyze and debug distributed systems to understand how their applications and its underlying services are performing*

None of these
> 


### How do you design your workload to adapt to changes in demand?

Use automation when obtaining or scaling resources
> *When replacing impaired resources or scaling your workload, automate the process by using managed AWS services, such as Amazon S3 and AWS Auto Scaling. You can also use third-party tools and AWS SDKs to automate scaling.*

Obtain resources upon detection of impairment to a workload
> *Scale resources reactively when necessary if availability is impacted, to restore workload availability.*

Obtain resources upon detection that more resources are needed for a workload
> *Scale resources proactively to meet demand and avoid availability impact.*

Load test your workload
> *Adopt a load testing methodology to measure if scaling activity meets workload requirements.*

None of these
> 


### How do you implement change?

Use runbooks for standard activities such as deployment
> *Runbooks are the predefined steps used to achieve specific outcomes. Use runbooks to perform standard activities, whether done manually or automatically. Examples include deploying a workload, patching it, or making DNS modifications.*

Integrate functional testing as part of your deployment
> *Functional tests are run as part of automated deployment. If success criteria are not met, the pipeline is halted or rolled back.*

Integrate resiliency testing as part of your deployment
> *Resiliency tests (as part of chaos engineering) are run as part of the automated deployment pipeline in a pre-prod environment.*

Deploy using immutable infrastructure
> *This is a model that mandates that no updates, security patches, or configuration changes happen in-place on production workloads. When a change is needed, the architecture is built onto new infrastructure and deployed into production.*

Deploy changes with automation
> *Deployments and patching are automated to eliminate negative impact.*

None of these
> 


### How do you back up data?

Identify and back up all data that needs to be backed up, or reproduce the data from sources
> *Amazon S3 can be used as a backup destination for multiple data sources. AWS services such as Amazon EBS, Amazon RDS, and Amazon DynamoDB have built in capabilities to create backups. Third-party backup software can also be used. Alternatively, if the data can be reproduced from other sources to meet RPO, you might not require a backup*

Secure and encrypt backups
> *Detect access using authentication and authorization, such as AWS IAM, and detect data integrity compromise by using encryption.*

Perform data backup automatically
> *Configure backups to be taken automatically based on a periodic schedule, or by changes in the dataset. RDS instances, EBS volumes, DynamoDB tables, and S3 objects can all be configured for automatic backup. AWS Marketplace solutions or third-party solutions can also be used.*

Perform periodic recovery of the data to verify backup integrity and processes
> *Validate that your backup process implementation meets your recovery time objectives (RTO) and recovery point objectives (RPO) by performing a recovery test.*

None of these
> 


### How do you use fault isolation to protect your workload?

Deploy the workload to multiple locations
> *Distribute workload data and resources across multiple Availability Zones or, where necessary, across AWS Regions. These locations can be as diverse as required.*

Automate recovery for components constrained to a single location
> *If components of the workload can only run in a single Availability Zone or on-premises data center, you must implement the capability to do a complete rebuild of the workload within your defined recovery objectives.*

Use bulkhead architectures
> *Like the bulkheads on a ship, this pattern ensures that a failure is contained to a small subset of requests&#x2F;users so the number of impaired requests is limited, and most can continue without error. Bulkheads for data are usually called partitions or shards, while bulkheads for services are known as cells.*

None of these
> 


### How do you design your workload to withstand component failures?

Monitor all components of the workload to detect failures
> *Continuously monitor the health of your workload so that you and your automated systems are aware of degradation or complete failure as soon as they occur. Monitor for key performance indicators (KPIs) based on business value.*

Fail over to healthy resources
> *Ensure that if a resource failure occurs, that healthy resources can continue to serve requests. For location failures (such as Availability Zone or AWS Region) ensure you have systems in place to fail over to healthy resources in unimpaired locations.*

Automate healing on all layers
> *Upon detection of a failure, use automated capabilities to perform actions to remediate.*

Use static stability to prevent bimodal behavior
> *Bimodal behavior is when your workload exhibits different behavior under normal and failure modes, for example, relying on launching new instances if an Availability Zone fails. You should instead build workloads that are statically stable and operate in only one mode. In this case, provision enough instances in each Availability Zone to handle the workload load if one AZ were removed and then use Elastic Load Balancing or Amazon Route 53 health checks to shift load away from the impaired instances.*

Send notifications when events impact availability
> *Notifications are sent upon the detection of significant events, even if the issue caused by the event was automatically resolved.*

None of these
> 


### How do you test reliability?

Use playbooks to investigate failures
> *Enable consistent and prompt responses to failure
               scenarios that are not well understood, by documenting the investigation process in
               playbooks. Playbooks are the predefined steps performed to identify the factors
               contributing to a failure scenario. The results from any process step are used to
               determine the next steps to take until the issue is identified or
               escalated.*

Perform post-incident analysis
> *Review customer-impacting events, and identify the
               contributing factors and preventative action items. Use this information to develop
               mitigations to limit or prevent recurrence. Develop procedures for prompt and
               effective responses. Communicate contributing factors and corrective actions as
               appropriate, tailored to target audiences. Have a method to communicate these causes
               to others as needed.*

Test functional requirements
> *These include unit tests and integration tests that validate required functionality.*

Test scaling and performance requirements
> *This includes load testing to validate that the workload meets scaling and performance requirements.*

Test resiliency using chaos engineering
> *Run tests that inject failures regularly into pre-production and production environments. Hypothesize how your workload will react to the failure, then compare your hypothesis to the testing results and iterate if they do not match. Ensure that production testing does not impact users.*

Conduct game days regularly
> *Use game days to regularly exercise your failure procedures as close to production as possible (including in production environments) with the people who will be involved in actual failure scenarios. Game days enforce measures to ensure that production testing does not impact users.*

None of these
> 


### How do you plan for disaster recovery (DR)?

Define recovery objectives for downtime and data loss
> *The workload has a recovery time objective (RTO) and recovery point objective (RPO).*

Use defined recovery strategies to meet the recovery objectives
> *A disaster recovery (DR) strategy has been defined to meet objectives.*

Test disaster recovery implementation to validate the implementation
> *Regularly test failover to DR to ensure that RTO and RPO are met.*

Manage configuration drift at the DR site or region
> *Ensure that the infrastructure, data, and configuration are as needed at the DR site or region.  For example, check that AMIs and service quotas are up to date.*

Automate recovery
> *Use AWS or third-party tools to automate system recovery and route traffic to the DR site or region.*

None of these
> 



---


---

## performance

### How do you select the best performing architecture?

Understand the available services and resources
> *Learn about and understand the wide range of services and resources available in the cloud. Identify the relevant services and configuration options for your workload, and understand how to achieve optimal performance.*

Define a process for architectural choices
> *Use internal experience and knowledge of the cloud, or external resources such as published use cases, relevant documentation, or whitepapers to define a process to choose resources and services. You should define a process that encourages experimentation and benchmarking with the services that could be used in your workload.*

Factor cost requirements into decisions 
> *Workloads often have cost requirements for operation. Use internal cost controls to select resource types and sizes based on predicted resource need.*

Use policies or reference architectures
> *Maximize performance and efficiency by evaluating internal policies and existing reference architectures and using your analysis to select services and configurations for your workload.*

Use guidance from your cloud provider or an appropriate partner
> *Use cloud company resources, such as solutions architects, professional services, or an appropriate partner to guide your decisions. These resources can help review and improve your architecture for optimal performance.*

Benchmark existing workloads
> *Benchmark the performance of an existing workload to understand how it performs on the cloud. Use the data collected from benchmarks to drive architectural decisions.*

Load test your workload
> *Deploy your latest workload architecture on the cloud using different resource types and sizes. Monitor the deployment to capture performance metrics that identify bottlenecks or excess capacity. Use this performance information to design or improve your architecture and resource selection.*

None of these
> 


### How do you select your compute solution?

Evaluate the available compute options
> *Understand the performance characteristics of the compute-related options available to you. Know how instances, containers, and functions work, and what advantages, or disadvantages, they bring to your workload.*

Understand the available compute configuration options
> *Understand how various options complement your workload, and which configuration options are best for your system. Examples of these options include instance family, sizes, features (GPU, I&#x2F;O), function sizes, container instances, and single versus multi-tenancy.*

Collect compute-related metrics
> *One of the best ways to understand how your compute systems are performing is to record and track the true utilization of various resources. This data can be used to make more accurate determinations about resource requirements.*

Determine the required configuration by right-sizing
> *Analyze the various performance characteristics of your workload and how these characteristics relate to memory, network, and CPU usage. Use this data to choose resources that best match your workload&#39;s profile. For example, a memory-intensive workload, such as a database, could be served best by the r-family of instances. However, a bursting workload can benefit more from an elastic container system.*

Use the available elasticity of resources
> *The cloud provides the flexibility to expand or reduce your resources dynamically through a variety of mechanisms to meet changes in demand. Combined with compute-related metrics, a workload can automatically respond to changes and utilize the optimal set of resources to achieve its goal.*

Re-evaluate compute needs based on metrics
> *Use system-level metrics to identify the behavior and requirements of your workload over time. Evaluate your workload&#39;s needs by comparing the available resources with these requirements and make changes to your compute environment to best match your workload&#39;s profile. For example, over time a system might be observed to be more memory-intensive than initially thought, so moving to a different instance family or size could improve both performance and efficiency.*

None of these
> 


### How do you select your storage solution?

Understand storage characteristics and requirements
> *Understand the different characteristics (for example, shareable, file size, cache size, access patterns, latency, throughput, and persistence of data) that are required to select the services that best fit your workload, such as object storage, block storage, file storage, or instance storage.*

Evaluate available configuration options
> *Evaluate the various characteristics and configuration options and how they relate to storage. Understand where and how to use provisioned IOPS, SSDs, magnetic storage, object storage, archival storage, or ephemeral storage to optimize storage space and performance for your workload.*

Make decisions based on access patterns and metrics
> *Choose storage systems based on your workload&#39;s access patterns and configure them by determining how the workload accesses data. Increase storage efficiency by choosing object storage over block storage. Configure the storage options you choose to match your data access patterns.*

None of these
> 


### How do you select your database solution?

Understand data characteristics
> *Understand the different characteristics of data in your workload. Determine if the workload requires transactions, how it interacts with data, and what its performance demands are. Use this data to select the best performing database approach for your workload (for example, relational databases, NoSQL Key-value, document, wide column, graph, time series, or in-memory storage).*

Evaluate the available options
> *Evaluate the services and storage options that are available as part of the selection process for your workload&#39;s storage mechanisms. Understand how, and when, to use a given service or system for data storage. Learn about available configuration options that can optimize database performance or efficiency, such as provisioned IOPs, memory and compute resources, and caching.*

Collect and record database performance metrics
> *Use tools, libraries, and systems that record performance measurements related to database performance. For example, measure transactions per second, slow queries, or system latency introduced when accessing the database. Use this data to understand the performance of your database systems.*

Choose data storage based on access patterns
> *Use the access patterns of the workload to decide which services and technologies to use. For example, utilize a relational database for workloads that require transactions, or a key-value store that provides higher throughput but is eventually consistent where applicable.*

Optimize data storage based on access patterns and metrics
> *Use performance characteristics and access patterns that optimize how data is stored or queried to achieve the best possible performance. Measure how optimizations such as indexing, key distribution, data warehouse design, or caching strategies impact system performance or overall efficiency.*

None of these
> 


### How do you configure your networking solution?

Understand how networking impacts performance
> *Analyze and understand how network-related decisions impact workload performance. For example, network latency often impacts the user experience, and using the wrong protocols can starve network capacity through excessive overhead.*

Evaluate available networking features
> *Evaluate networking features in the cloud that may increase performance. Measure the impact of these features through testing, metrics, and analysis. For example, take advantage of network-level features that are available to reduce latency, network distance, or jitter.*

Choose appropriately sized dedicated connectivity or VPN for hybrid workloads
> *When there is a requirement for on-premise communication, ensure that you have adequate bandwidth for workload performance.  Based on bandwidth requirements, a single dedicated connection or a single VPN might not be enough, and you must enable traffic load balancing across multiple connections.*

Leverage load-balancing and encryption offloading
> *Distribute traffic across multiple resources or services to allow your workload to take advantage of the elasticity that the cloud provides. You can also use load balancing for offloading encryption termination to improve performance and to manage and route traffic effectively.*

Choose network protocols to improve performance
> *Make decisions about protocols for communication between systems and networks based on the impact to the workload’s performance.*

Choose your workload’s location based on network requirements
> *Use the cloud location options available to reduce network latency or improve throughput. Utilize AWS Regions, Availability Zones, placement groups, and edge locations such as Outposts, Local Regions, and Wavelength, to reduce network latency or improve throughput.*

Optimize network configuration based on metrics
> *Use collected and analyzed data to make informed decisions about optimizing your network configuration. Measure the impact of those changes and use the impact measurements to make future decisions.*

None of these
> 


### How do you evolve your workload to take advantage of new releases?

Stay up-to-date on new resources and services
> *Evaluate ways to improve performance as new services, design patterns, and product offerings become available. Determine which of these could improve performance or increase the efficiency of the workload through ad-hoc evaluation, internal discussion, or external analysis.*

Define a process to improve workload performance
> *Define a process to evaluate new services, design patterns, resource types, and configurations as they become available. For example, run existing performance tests on new instance offerings to determine their potential to improve your workload.*

Evolve workload performance over time
> *As an organization, use the information gathered through the evaluation process to actively drive adoption of new services or resources when they become available.*

None of these
> 


### How do you monitor your resources to ensure they are performing?

Record performance-related metrics
> *Use a monitoring and observability service to record performance-related metrics. For example, record database transactions, slow queries, I&#x2F;O latency, HTTP request throughput, service latency, or other key data.*

Analyze metrics when events or incidents occur
> *In response to (or during) an event or incident, use monitoring dashboards or reports to understand and diagnose the impact. These views provide insight into which portions of the workload are not performing as expected.*

Establish Key Performance Indicators (KPIs) to measure workload performance
> *Identify the KPIs that indicate whether the workload is performing as intended. For example, an API-based workload might use overall response latency as an indication of overall performance, and an e-commerce site might choose to use the number of purchases as its KPI.*

Use monitoring to generate alarm-based notifications
> *Using the performance-related key performance indicators (KPIs) that you defined, use a monitoring system that generates alarms automatically when these measurements are outside expected boundaries.*

Review metrics at regular intervals
> *As routine maintenance, or in response to events or incidents, review which metrics are collected. Use these reviews to identify which metrics were key in addressing issues and which additional metrics, if they were being tracked, would help to identify, address, or prevent issues.*

Monitor and alarm proactively
> *Use key performance indicators (KPIs), combined with monitoring and alerting systems, to proactively address performance-related issues. Use alarms to trigger automated actions to remediate issues where possible. Escalate the alarm to those able to respond if automated response is not possible. For example, you may have a system that can predict expected key performance indicators (KPI) values and alarm when they breach certain thresholds, or a tool that can automatically halt or roll back deployments if KPIs are outside of expected values.*

None of these
> 


### How do you use tradeoffs to improve performance?

Understand the areas where performance is most critical
> *Understand and identify areas where increasing the performance of your workload will have a positive impact on efficiency or customer experience. For example, a website that has a large amount of customer interaction can benefit from using edge services to move content delivery closer to customers.*

Learn about design patterns and services
> *Research and understand the various design patterns and services that help improve workload performance. As part of the analysis, identify what you could trade to achieve higher performance. For example, using a cache service can help to reduce the load placed on database systems; however, it requires some engineering to implement safe caching or possible introduction of eventual consistency in some areas.*

Identify how tradeoffs impact customers and efficiency
> *When evaluating performance-related improvements, determine which choices will impact your customers and workload efficiency. For example, if using a key-value data store increases system performance, it is important to evaluate how the eventually consistent nature of it will impact customers.*

Measure the impact of performance improvements
> *As changes are made to improve performance, evaluate the collected metrics and data. Use this information to determine impact that the performance improvement had on the workload, the workload’s components, and your customers. This measurement helps you understand the improvements that result from the tradeoff, and helps you determine if any negative side-effects were introduced.*

Use various performance-related strategies
> *Where applicable, utilize multiple strategies to improve performance. For example, using strategies like caching data to prevent excessive network or database calls, using read-replicas for database engines to improve read rates, sharding or compressing data where possible to reduce data volumes, and buffering and streaming of results as they are available to avoid blocking.*

None of these
> 



---


---

## costOptimization

### How do you implement cloud financial management?

Establish a cost optimization function
> *Create a team that is responsible for establishing and
                 maintaining cost awareness across your organization. The team requires people from finance,
                 technology, and business roles across the organization.*

Establish a partnership between finance and technology
> *Involve finance and technology teams in cost
                    and usage discussions at all stages of your cloud journey. Teams regularly meet and discuss topics such
                    as organizational goals and targets, current state of cost and usage, and financial and accounting
                    practices.*

Establish cloud budgets and forecasts
> *Adjust existing organizational budgeting and forecasting
                    processes to be compatible with the highly variable nature of cloud costs and usage. Processes must be
                    dynamic using trend based or business driver-based algorithms, or a combination.*

Implement cost awareness in your organizational processes
> *Implement cost awareness into new or
                    existing processes that impact usage, and leverage existing processes for cost awareness. Implement
                    cost awareness into employee training.*

Report and notify on cost optimization
> *Configure AWS Budgets to provide notifications on cost and
                    usage against targets. Have regular meetings to analyze this workload&#39;s cost efficiency and to promote
                    cost aware culture.*

Monitor cost proactively
> *Implement tooling and dashboards to monitor cost proactively for the
                    workload. Do not just look at costs and categories when you receive notifications. This helps to identify
                    positive trends and promote them throughout your organization.*

Keep up to date with new service releases
> *Consult regularly with experts or APN Partners to consider
                    which services and features provide lower cost. Review AWS blogs and other information sources.*

None of these
> 


### How do you govern usage?

Develop policies based on your organization requirements
> *Develop policies that define how resources
               are managed by your organization. Policies should cover cost aspects of resources and workloads,
               including creation, modification and decommission over the resource lifetime.*

Implement goals and targets
> *Implement both cost and usage goals for your workload. Goals provide
               direction to your organization on cost and usage, and targets provide measurable outcomes for your
               workloads.*

Implement an account structure
> *Implement a structure of accounts that maps to your organization. This assists in allocating and
				managing costs throughout your organization.*

Implement groups and roles
> *Implement groups and roles that align to your policies and control who
               can create, modify, or decommission instances and resources in each group. For example, implement
               development, test, and production groups. This applies to AWS services and third-party solutions.*

Implement cost controls
> *Implement controls based on organization policies and defined groups and
               roles. These ensure that costs are only incurred as defined by organization requirements: for example,
               control access to regions or resource types with IAM policies.*

Track project lifecycle
> *Track, measure, and audit the lifecycle of projects, teams, and environments to
               avoid using and paying for unnecessary resources.*

None of these
> 


### How do you monitor usage and cost?

Configure detailed information sources
> *Configure the AWS Cost and Usage Report, and Cost Explorer
               hourly granularity, to provide detailed cost and usage information. Configure your workload to have log
               entries for every delivered business outcome.*

Identify cost attribution categories
> *Identify organization categories that could be used to allocate cost
               within your organization.*

Establish organization metrics
> *Establish the organization metrics that are required for this workload.
               Example metrics of a workload are customer reports produced or web pages served to customers.*

Configure billing and cost management tools
> *Configure AWS Cost Explorer and AWS Budgets inline
               with your organization policies.*

Add organization information to cost and usage
> *Define a tagging schema based on organization, and
               workload attributes, and cost allocation categories. Implement tagging across all resources. Use Cost
               Categories to group costs and usage according to organization attributes.*

Allocate costs based on workload metrics
> *Allocate the workload&#39;s costs by metrics or business
               outcomes to measure workload cost efficiency. Implement a process to analyze the AWS Cost and Usage
               Report with Amazon Athena, which can provide insight and charge back capability.*

None of these
> 


### How do you decommission resources?

Track resources over their life time
> *Define and implement a method to track resources and their
               associations with systems over their life time. You can use tagging to identify the workload or function
               of the resource.*

Implement a decommissioning process
> *Implement a process to identify and decommission orphaned
               resources.*

Decommission resources
> *Decommission resources triggered by events such as periodic audits, or
               changes in usage. Decommissioning is typically performed periodically, and is manual or automated.*

Decommission resources automatically
> *Design your workload to gracefully handle resource
               termination as you identify and decommission non-critical resources, resources that are not required, or
               resources with low utilization.*

None of these
> 


### How do you evaluate cost when you select services?

Identify organization requirements for cost
> *Work with team members to define the balance between
               cost optimization and other pillars, such as performance and reliability, for this workload.*

Analyze all components of this workload
> *Ensure every workload component is analyzed, regardless of
               current size or current costs. Review effort should reflect potential benefit, such as current and
               projected costs.*

Perform a thorough analysis of each component
> *Look at overall cost to the organization of each
               component. Look at total cost of ownership by factoring in cost of operations and management,
               especially when using managed services. Review effort should reflect potential benefit: for example,
               time spent analyzing is proportional to component cost.*

Select software with cost effective licensing
> *Open source software will eliminate software licensing
               costs, which can contribute significant costs to workloads. Where licensed software is required, avoid
               licenses bound to arbitrary attributes such as CPUs, look for licenses that are bound to output or
               outcomes. The cost of these licenses scales more closely to the benefit they provide.*

Select components of this workload to optimize cost in line with organization priorities
> *Factor in cost
               when selecting all components. This includes using application level and managed services, such as
               Amazon RDS, Amazon DynamoDB, Amazon SNS, and Amazon SES to reduce overall organization cost.
               Use serverless and containers for compute, such as AWS Lambda, Amazon S3 for static websites, and
               Amazon ECS. Minimize license costs by using open source software, or software that does not have
               license fees: for example, Amazon Linux for compute workloads or migrate databases to Amazon
               Aurora.*

Perform cost analysis for different usage over time
> *Workloads can change over time. Some services or
               features are more cost effective at different usage levels. By performing the analysis on each
               component over time and at projected usage, you ensure the workload remains cost effective over its
               lifetime..*

None of these
> 


### How do you meet cost targets when you select resource type, size and number?

Perform cost modeling
> *Identify organization requirements and perform cost modeling of the workload
               and each of its components. Perform benchmark activities for the workload under different predicted
               loads and compare the costs. The modeling effort should reflect potential benefit: for example, time
               spent is proportional to component cost.*

Select resource type and size based on data
> *Select resource size or type based on data about the
               workload and resource characteristics: for example, compute, memory, throughput, or write intensive.
               This selection is typically made using a previous version of the workload (such as an on-premises
               version), using documentation, or using other sources of information about the workload.*

Select resource type and size automatically based on metrics
> *Use metrics from the currently running
               workload to select the right size and type to optimize for cost. Appropriately provision throughput,
               sizing, and storage for services such as Amazon EC2, Amazon DynamoDB, Amazon EBS (PIOPS), Amazon
               RDS, Amazon EMR, and networking. This can be done with a feedback loop such as automatic scaling or
               by custom code in the workload.*

None of these
> 


### How do you use pricing models to reduce cost?

Perform pricing model analysis
> *Analyze each component of the workload. Determine if the component
               and resources will be running for extended periods (for commitment discounts), or dynamic and short
               running (for spot or on-demand). Perform an analysis on the workload using the Recommendations
               feature in AWS Cost Explorer.*

Implement regions based on cost
> *Resource pricing can be different in each region. Factoring in region
               cost ensures you pay the lowest overall price for this workload*

Select third party agreements with cost efficient terms
> *Cost efficient agreements and terms ensure the
               cost of these services scales with the benefits they provide. Select agreements and pricing that scale
               when they provide additional benefits to your organization.*

Implement pricing models for all components of this workload
> *Permanently running resources should
               utilize reserved capacity such as Savings Plans or reserved Instances. Short term capacity is configured to
               use Spot Instances, or Spot Fleet. On demand is only used for short-term workloads that cannot be
               interrupted and do not run long enough for reserved capacity, between 25% to 75% of the period,
               depending on the resource type.*

Perform pricing model analysis at the master account level
> *Use Cost Explorer Savings Plans and
               Reserved Instance recommendations to perform regular analysis at the master account level for
               commitment discounts.*

None of these
> 


### How do you plan for data transfer charges?

Perform data transfer modeling
> *Gather organization requirements and perform data transfer modeling
               of the workload and each of its components. This identifies the lowest cost point for its current data
               transfer requirements.*

Select components to optimize data transfer cost
> *All components are selected, and architecture is
               designed to reduce data transfer costs. This includes using components such as WAN optimization and
               Multi-AZ configurations*

Implement services to reduce data transfer costs
> *Implement services to reduce data transfer: for
               example, using a CDN such as Amazon CloudFront to deliver content to end users, caching layers using
               Amazon ElastiCache, or using AWS Direct Connect instead of VPN for connectivity to AWS.*

None of these
> 


### How do you manage demand, and supply resources?

Perform an analysis on the workload demand
> *Analyze the demand of the workload over time. Ensure
               the analysis covers seasonal trends and accurately represents operating conditions over the full
               workload lifetime. Analysis effort should reflect potential benefit: for example, time spent is
               proportional to the workload cost.*

Implement a buffer or throttle to manage demand
> *Buffering and throttling modify the demand on
               your workload, smoothing out any peaks. Implement throttling when your clients perform retries.
               Implement buffering to store the request and defer processing until a later time. Ensure your throttles
               and buffers are designed so clients receive a response in the required time.*

Supply resources dynamically
> *Resources are provisioned in a planned manner. This can be demand-
               based, such as through automatic scaling, or time-based, where demand is predictable and resources
               are provided based on time. These methods result in the least amount of over or under provisioning.*

None of these
> 


### How do you evaluate new services?

Develop a workload review process
> *Develop a process that defines the criteria and process for
               workload review. The review effort should reflect potential benefit: for example, core workloads or
               workloads with a value of over 10% of the bill are reviewed quarterly, while workloads below 10% are
               reviewed annually.*

Review and analyze this workload regularly
> *Existing workloads are regularly reviewed as per defined
               processes.*

None of these
> 



---



