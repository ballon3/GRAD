
import graphene 

from graphene_django.types import DjangoObjectType

from ballon.models import Data, Resume, Main, Education, Testimonial, Address, Social, Work, Skill, Project  

class DataType(DjangoObjectType):
    class Meta:
        model = Data

class ResumeType(DjangoObjectType):
    class Meta:
        model = Resume


class MainType(DjangoObjectType):
    class Meta:
        model = Main

class EducationType(DjangoObjectType):
    class Meta:
        model = Education

class AddressType(DjangoObjectType):
    class Meta:
        model = Address

class WorkType(DjangoObjectType):
    class Meta:
        model = Work

class SkillType(DjangoObjectType):
    class Meta:
        model = Skill

class ProjectType(DjangoObjectType):
    class Meta:
        model = Project

class TestimonialType(DjangoObjectType):
    class Meta:
        model = Testimonial

class SocialType(DjangoObjectType):
    class Meta:
        model = Social


class Query(graphene.AbstractType):
    
    all_data = graphene.List(DataType)
    
    data = graphene.Field(DataType, id=graphene.Int(), name=graphene.String())
 

#    all_work = graphene.List(WorkType)
#    all_education = graphene.List(EducationType)
#    all_skill = graphene.List(SkillType)
#    all_testimonial = graphene.List(TestimonialType)
#    all_social = graphene.List(SocialType)
#    all_main = graphene.List(MainType)
#   all_resume = graphene.List(ResumeType)
#    
#    resume = graphene.Field(ResumeType, id=graphene.Int(), name=graphene.String())

    def resolve_all_data(self, info, **kwargs):
        return Data.objects.all()

    def resolve_resume(self, info, **kwargs):

        id = kwargs.get('id')
        name = kwargs.get('name')

        if id is not None:
            return Data.objects.get(pk=id)

        if name is not None:
            return Data.objects.get(name=name)
    
    def resolve_all_main(self, args):
        return Main.objects.all()
   


    def resolve_all_main(self, args):
        return Main.objects.all()
    
    def resolve_all_address(self, args):
        return Address.objects.all()

    def resolve_all_social(self, args):
        return Social.objects.all()

    def resolve_all_education(self, args):
        return Education.objects.all()
    
    def resolve_all_work(self, args):
        return Work.objects.all()

    def resolve_all_skill(self, args):
        return Skill.objects.all()

    def resolve_all_project(self, args):
        return Project.objects.all()
   
    def resolve_all_testimonial(self, args):
        return Testimonial.objects.all()











    
