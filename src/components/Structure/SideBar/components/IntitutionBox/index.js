import React from 'react';
import { Link } from 'react-router-dom';
import Popover from '../../../../Popover';
import { SettingsIcon, LogoutIcon } from '../../../../Icons';
import { colors } from '../../../../Theme';
import { useUser, useInstitution } from '.././../../../../data/contexts';
import { Container, Image, UserName, Icons, NoImage } from './styles';

function InstitutionBox() {
  const { user } = useUser();
  const { nome: userName, instituicoes } = user || {};
  const { setCurrentInstitution, institution } = useInstitution();

  const { image } = institution || {};

  return (
    <Container my={16}>
      {image ? <Image src={image} alt="Institution logo" /> : <NoImage />}
      <Popover
        onSelect={setCurrentInstitution}
        items={
          instituicoes?.length > 0
            ? instituicoes.map(({ _id, nome }) => ({ id: _id, text: nome }))
            : []
        }
      />
      <UserName>{userName || 'User Name'}</UserName>
      <Icons>
        <SettingsIcon width={15} mr={12} color={colors.light} />
        <Link to="/login">
          <LogoutIcon width={15} color={colors.light} />
        </Link>
      </Icons>
    </Container>
  );
}

export default InstitutionBox;
