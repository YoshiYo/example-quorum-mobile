pipeline {
   agent {
       docker { image 'node:10' }
   }
   environnement {
       GH_TOKEN = credentials('jenkins_github_token_yoshiyo')
       NPM_TOKEN = credentials('jenkins_npm_token_guillaume')
   }
   stages {
       stage('Test') {
           steps {
               sh 'node --version'
           }
       }
       stage('Install'){
           steps {
               sh 'npm install'
               if(env.BRANCH_NAME=='master'){
                   sh 'npx semantic-release'
               }       
           }
       }
       stage('Notify slack') {
            steps {
                slackSend color: "#439FE0", message: "Build Started: ${env.JOB_NAME} ${env.BUILD_NUMBER}"
            }
        }
    }
}