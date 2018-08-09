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
                cobertura autoUpdateHealth: false, autoUpdateStability: false, coberturaReportFile: 'coverage/cobertura-coverage.xml', conditionalCoverageTargets: '70, 40, 55', failUnhealthy: false, failUnstable: false, lineCoverageTargets: '80, 40, 60', maxNumberOfBuilds: 0, methodCoverageTargets: '80, 40, 60', onlyStable: false, sourceEncoding: 'ASCII', zoomCoverageChart: false
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