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
               sh 'npx semantic-release'
           }
       }
    }
}