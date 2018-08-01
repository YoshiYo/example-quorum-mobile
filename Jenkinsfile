pipeline {
   agent {
       docker { image 'node:10' }
   }
   environment {
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
           }
       }
       stage('Testing with Jest'){
           steps {
               sh 'npm run test-with-coverage'
           }
       }
        stage('Changelog creation') {
            when {
                branch 'master'
            }
            steps {
                sh 'npx semantic-release'
            }
        }
    }
}