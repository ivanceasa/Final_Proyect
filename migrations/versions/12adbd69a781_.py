"""empty message

Revision ID: 12adbd69a781
Revises: af34eb4c3971
Create Date: 2021-10-09 10:31:40.465119

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '12adbd69a781'
down_revision = 'af34eb4c3971'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user_hostel', 'user_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('user_hostel', 'hostel_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('user_route', 'user_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('user_route', 'route_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('user_stage', 'user_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('user_stage', 'stage_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user_stage', 'stage_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('user_stage', 'user_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('user_route', 'route_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('user_route', 'user_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('user_hostel', 'hostel_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('user_hostel', 'user_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    # ### end Alembic commands ###
