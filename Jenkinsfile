pipeline {
   agent {
       docker { image 'node:10' }
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
           }
       }
       stage('Testing with Jest'){
           steps {
               sh 'npm test'
           }
       }
       stage('Notify slack') {
            steps {
                slackSend color: "#439FE0", message: "Build Started: ${env.JOB_NAME} ${env.BUILD_NUMBER}"
            }
        }
    }
}