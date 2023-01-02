pipeline {
  agent any
triggers {
    githubPush()
  }

  	environment {
		DOCKERHUB_CREDENTIALS=credentials('Dockerhub')
	}

  stages{
    stage("unit test"){
      agent {
        docker {
            image 'node:16.17.1'
            reuseNode true
        }
    }
    steps {
              echo "hello"
              sh "npm cache clean --force"
              sh "npm i"
              sh "npm run test"
              // timeout(time: 20, unit: 'SECONDS') {sh "npm run serve"}
      }
  }
	  
      stage('Build') {

		steps {
			sh 'docker build -t waer/frontend:latest .'
		}
	}

  stage("intgration testing"){
    steps {
              echo "i will let it here as example of succes pipline"
      }
  }

	stage('Login') {
		steps {
			sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
		}
	}



    stage('Push') {
			steps {
				sh 'docker push waer/frontend:latest'
			}
		}

}

	post {
		always {
			sh 'docker logout'
		}
	}

}
