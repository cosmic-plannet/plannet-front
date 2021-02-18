<h1 align="center">🪐PLAN:NET</h1>
<p>
</p>
<div align="center">
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=#FFFFFF" class="center"/></a>&nbsp;
<img src="https://img.shields.io/badge/styled-components-DB7093?style=flat-square&logo=styled-components&logoColor=#DB7093" class="center"/></a>&nbsp;
<img src="https://img.shields.io/badge/redux-764ABC?style=flat-square&logo=redux&logoColor=#764ABC" class="center"/></a>&nbsp;
</div>
<p>
</p>
<div>&nbsp;</div>

  


> 👩‍👧‍👧 신뢰도가 보장된 팀원과 함께하는 온라인 스터디 플랫폼
<div>&nbsp;</div>
  

## 구현 목표

코로나19로 인해 비대면 스터디가 활성화되고 있다. 하지만 팀원의 문제로 스터디의 목표를 달성하지 못하고 해산하는 경우가 많이 발생한다.

이러한 문제점을 인지하고, 신뢰도가 보장된 팀원을 구해 꾸준히 스터디를 지속할 수 있도록 하여 목표 달성을 돕는 시스템을 구현하고자 한다.  
<div>&nbsp;</div>
  

## 배포 주소
https://loving-lamport-d2be65.netlify.app/

## 주요 기능



### 로그인

로그인은 Google OAuth를 통해 가능하다. 최초 로그인 시, 관심있는 카테고리를 다수 선택할 수 있다.
![login](https://user-images.githubusercontent.com/24283401/108343221-0a762680-721f-11eb-959c-99f2eb40204d.gif)


### 스터디 추천

아직 어떤 스터디에도 참여하지 않은 유저에게 스터디를 추천한다.

유저가 선택한 관심 카테고리를 기반으로 추천될 스터디들이 결정되며, 노출되는 순서는 해당 스터디에 참여하고 있는 유저들의 경험치 등을 기반으로 정해진다.

![main](https://user-images.githubusercontent.com/24283401/108342365-13b2c380-721e-11eb-9d9f-7733aeee780b.gif)
  


### 스터디 생성 및 가입

스터디는 Danbee.ai를 활용해 만든 챗봇을 통해 생성할 수 있으며, 스터디를 생성한 유저는 자동적으로 방장 권한을 갖게 된다. 

그 외 유저들은 추천받은 스터디 중 스터디를 선택해 참여할 수 있다.

방장은 참여한 스터디원의 수가 충분하다고 판단하면 해당 스터디를 시작할 수 있다.
![chatbot](https://user-images.githubusercontent.com/24283401/108343231-0d711700-721f-11eb-8d8e-fc1f9349d6ef.gif)

  

### 스터디 진행

스터디원들은 각자의 할 일을 추가, 완료하여 달성률을 올릴 수 있으며, 다른 스터디원의 달성률 또한 확인 가능하다.

로그인한 구글 아이디를 통해 구글 meets를 생성하여 다른 스터디원과 함께 스터디를 진행할 수 있으며, 스터디마다 스터디원들의 출석률을 체크한다.

스터디원의 출결이나 달성률 등을 토대로 페널티가 부과된다. 부과된 페널티가 스터디의 최대 페널티에 다다르면 해당 팀원은 스터디에서 강제 퇴출된다.

![study](https://user-images.githubusercontent.com/24283401/108342573-4b217000-721e-11eb-9d42-125857bbc79c.gif) 



### 스터디 완료

스터디의 달성률이 100에 도달하면, 방장에게는 스터디를 종료할 수 있는 권한이 주어진다. 방장이 스터디를 종료하게 되면, 모든 스터디원은 다른 스터디원들의 평가를 할 수 있는 페이지에 접근할 수 있다.

각 스터디원의 평가와 할 일 달성률, 출결 등을 기반으로 경험치와 업적 정보를 업데이트된다.

![evaluation](https://user-images.githubusercontent.com/24283401/108342629-5a082280-721e-11eb-98d0-ae3a2eb1ad8c.gif)
  

### 마이 페이지
유저가 스터디에 참여하면서 받은 평가들과 업적을 볼 수 있다.
유저가 현재 참여중인 스터디들도 볼 수 있다.
![mypage](https://user-images.githubusercontent.com/24283401/108342475-32b15580-721e-11eb-971e-4ea8b0d9f7b8.gif)


### 랭킹

각 스터디의 달성률, 스터디원의 할 일 달성률, 출결률 등을 반영하여 매일 모든 스터디 혹은 각 카테고리마다 스터디의 랭킹을 산출한다.

각 유저의 경험치, 업적 등을 반영하여 매일 모든 유저의 랭킹을 산출한다.

![ranking](https://user-images.githubusercontent.com/24283401/108342517-3d6bea80-721e-11eb-99af-f0dc7e734bef.gif)
<div>&nbsp;</div>



  

  
## Contributors

<table style="border-collapse: collapse; border: none;" bgcolor="ffffff">
  <tr style="border: none;" align="center">
    <td style="border: none;" align="center"><a href="https://github.com/minjyo"><img src="https://avatars.githubusercontent.com/u/24283401?v=4" width="100px;" alt=""/><br /><sub><b>minjyo</b></sub></a><br /><a href="https://github.com/orgs/cosmic-plannet/people/minjyo" title="Code">🗃 👩‍💻</a></td>
  </tr>
</table>
