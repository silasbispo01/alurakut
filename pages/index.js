import styled from 'styled-components'

import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/alurakutCommons'
import { MainGrid } from '../src/components/MainGrid'
import { Box } from '../src/components/Box'

function ProfileSideBar(props){
	return (
		<Box>
			<img style={{borderRadius: '8px'}}src={`https://github.com/${props.githubUser}.png`}/>
			<hr />
		</Box>
	)
}

export default function Home() {
	const githubUser = 'silasbispo01'
	const pessoasFavoritas = ['juunegreiros', 'peas', 'omariosouto', 'rafaballerini', 'marcobrunodev', 'felipefialho']
  return (
		<>
		<AlurakutMenu/>
    <MainGrid>
			<div className='profileArea' style={{ gridArea: 'profileArea'}}>
				<ProfileSideBar githubUser={githubUser}/>
			</div>
			<div className='welcomeArea' style={{ gridArea: 'welcomeArea'}}>
				<Box>
					<h1 className='title'>
						Bem-vindo(a)
					</h1>
					<OrkutNostalgicIconSet/>
				</Box>
			</div>
			<div className='profileRelationsArea' style={{ gridArea: 'profileRelationsArea'}}>
				<ProfileRelationsBoxWrapper>
					<h2 className='smallTitle'>
						Pessoas da comunidade ({pessoasFavoritas.length})
					</h2>

					<ul>
						{pessoasFavoritas.map(pessoa => {
							return(
								<li>
									<a href={`/users/${pessoa}`} key={pessoa}>
										<img style={{borderRadius: '2px'}} src={`https://github.com/${pessoa}.png`}/>
										<span>{pessoa}</span>
									</a>
								</li>
							)
						})}
					</ul>
				</ProfileRelationsBoxWrapper>	
			</div>
		</MainGrid>
		</>

  )
}
